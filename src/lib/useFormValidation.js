"use client";

import { useCallback, useRef, useState } from "react";
import {
  sanitiseField,
  trimValues,
  validateField,
  validateForm,
} from "./validation";

/**
 * Wires the rules in `./validation` to a controlled form.
 *
 * Timing is the point of the hook: a field is validated on blur and on submit,
 * never while it is first being typed into — nobody wants "enter a valid email"
 * at `a@`. Once a field *is* showing an error, it re-validates on every
 * keystroke so the message clears the moment it's fixed.
 *
 * @param initialValues object of field name -> "" starting state
 * @param schema        field name -> `true` (required), `false` (optional), or
 *                      `{ required, oneOf }` for constrained fields. May also be
 *                      a `(values) => schemaObject` function, for a field whose
 *                      required-ness depends on another (a "please specify" box
 *                      that only matters once "Other" is chosen) — re-resolved
 *                      on every change/blur/submit against the current values.
 */
export default function useFormValidation(initialValues, schema) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const setFieldError = useCallback((name, message) => {
    setErrors((prev) => {
      if ((prev[name] ?? "") === message) return prev;
      const next = { ...prev };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  }, []);

  const handleChange = useCallback(
    (event) => {
      const { name } = event.target;
      // Rejected characters never reach state, so the controlled input snaps
      // straight back — the box only ever holds something plausible.
      const value = sanitiseField(name, event.target.value);
      const nextValues = { ...values, [name]: value };
      setValues(nextValues);
      // Only re-validate a field that is already complaining. Resolve the schema
      // against the post-change values so a conditional field sees the new state.
      const rule = resolveSchema(schema, nextValues)[name];
      setErrors((prev) => {
        if (!prev[name]) return prev;
        const message = validateField(name, value, rule);
        if (prev[name] === message) return prev;
        const next = { ...prev };
        if (message) next[name] = message;
        else delete next[name];
        return next;
      });
    },
    [schema, values]
  );

  const handleBlur = useCallback(
    (event) => {
      const { name, value } = event.target;
      const rule = resolveSchema(schema, values)[name];
      setFieldError(name, validateField(name, value, rule));
    },
    [schema, values, setFieldError]
  );

  /** Spread onto an Input/Textarea/Select alongside its label and placeholder. */
  const fieldProps = useCallback(
    (name) => ({
      name,
      value: values[name] ?? "",
      onChange: handleChange,
      onBlur: handleBlur,
      error: errors[name],
      required: normaliseRequired(resolveSchema(schema, values)[name]),
    }),
    [values, errors, handleChange, handleBlur, schema]
  );

  /**
   * `onValid` receives the trimmed values and is only called once every field
   * passes. On failure the first offending field is focused, so keyboard and
   * screen-reader users land on the problem instead of hunting for it.
   */
  const handleSubmit = useCallback(
    (onValid) => async (event) => {
      event.preventDefault();
      const resolved = resolveSchema(schema, values);
      const nextErrors = validateForm(values, resolved);
      setErrors(nextErrors);

      const firstInvalid = Object.keys(resolved).find(
        (name) => nextErrors[name]
      );
      if (firstInvalid) {
        formRef.current?.elements?.[firstInvalid]?.focus();
        return;
      }

      await onValid(trimValues(values));
    },
    [values, schema]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return { values, errors, fieldProps, handleSubmit, reset, formRef };
}

function normaliseRequired(entry) {
  if (entry && typeof entry === "object") return entry.required !== false;
  return Boolean(entry);
}

/** A schema may be a plain object or a `(values) => schemaObject` function, for
 *  forms whose required fields depend on another field. Objects pass through
 *  untouched, so every existing form is unaffected. */
function resolveSchema(schema, values) {
  return typeof schema === "function" ? schema(values) : schema;
}
