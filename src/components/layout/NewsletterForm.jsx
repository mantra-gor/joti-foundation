"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { postJson } from "@/lib/api";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      await postJson("/newsletter", { email });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          aria-label="Email address"
          className="w-full rounded border border-input-border bg-surface-container-lowest px-4 py-3 font-sans text-body-md text-on-background transition-colors focus:border-primary focus:outline-none"
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
      {status === "success" && (
        <span className="font-sans text-sm text-primary">Thanks for subscribing.</span>
      )}
      {status === "error" && (
        <span className="font-sans text-sm text-error">Something went wrong. Try again.</span>
      )}
    </form>
  );
}
