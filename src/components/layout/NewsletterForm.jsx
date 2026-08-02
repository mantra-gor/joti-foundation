"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { validateField } from "@/lib/validation";
import { subscribeToNewsletter } from "@/components/layout/newsletterActions";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  // Single field, so the shared hook would be more ceremony than it's worth —
  // the rule itself still comes from @/lib/validation.
  function validate(value) {
    const message = validateField("email", value);
    setError(message);
    return !message;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate(email)) return;

    setStatus("loading");
    try {
      // The action returns `{ error }` rather than throwing; the catch is for
      // the request itself failing to reach the server at all.
      const result = await subscribeToNewsletter(email.trim());
      if (result?.error) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) validate(event.target.value);
          }}
          onBlur={(event) => validate(event.target.value)}
          placeholder="Email address"
          aria-label="Email address"
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? "newsletter-email-error" : undefined}
          className={`w-full rounded border bg-surface-container-lowest px-4 py-3 font-sans text-body-md text-on-background transition-colors focus:outline-none ${
            error
              ? "border-error focus:border-error"
              : "border-input-border focus:border-primary"
          }`}
        />
        <motion.button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-secondary text-on-secondary transition-colors hover:opacity-90 disabled:opacity-50"
          whileHover={status === "loading" ? undefined : { scale: 1.08, x: 2 }}
          whileTap={status === "loading" ? undefined : { scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </motion.button>
      </div>
      {error && (
        <span
          id="newsletter-email-error"
          role="alert"
          className="font-sans text-sm text-error"
        >
          {error}
        </span>
      )}
      {status === "success" && (
        <span className="font-sans text-sm text-primary">
          Thanks for subscribing.
        </span>
      )}
      {status === "error" && (
        <span className="font-sans text-sm text-error">
          Something went wrong. Try again.
        </span>
      )}
    </form>
  );
}
