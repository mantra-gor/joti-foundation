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
 *                      `{ required, oneOf }` for constrained fields
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
      setValues((prev) => ({ ...prev, [name]: value }));
      // Only re-validate a field that is already complaining.
      setErrors((prev) => {
        if (!prev[name]) return prev;
        const message = validateField(name, value, schema[name]);
        if (prev[name] === message) return prev;
        const next = { ...prev };
        if (message) next[name] = message;
        else delete next[name];
        return next;
      });
    },
    [schema]
  );

  const handleBlur = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFieldError(name, validateField(name, value, schema[name]));
    },
    [schema, setFieldError]
  );

  /** Spread onto an Input/Textarea/Select alongside its label and placeholder. */
  const fieldProps = useCallback(
    (name) => ({
      name,
      value: values[name] ?? "",
      onChange: handleChange,
      onBlur: handleBlur,
      error: errors[name],
      required: normaliseRequired(schema[name]),
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
      const nextErrors = validateForm(values, schema);
      setErrors(nextErrors);

      const firstInvalid = Object.keys(schema).find((name) => nextErrors[name]);
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
