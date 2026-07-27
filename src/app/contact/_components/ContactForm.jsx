"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { postJson } from "@/lib/api";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    try {
      await postJson("/api/contact", form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <Input
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <label className="flex flex-col gap-2">
        <span className="font-mono text-label-caps uppercase text-on-surface-variant">
          Message
        </span>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="resize-none rounded border border-input-border bg-surface-container-lowest px-4 py-3 font-sans text-body-md text-on-background transition-colors focus:border-primary focus:outline-none"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
          <Send size={16} strokeWidth={1.5} aria-hidden="true" />
        </Button>
        {status === "success" && (
          <span className="font-sans text-sm text-primary">
            Thanks for reaching out. We&rsquo;ll be in touch soon.
          </span>
        )}
        {status === "error" && (
          <span className="font-sans text-sm text-error">
            Something went wrong. Please try again.
          </span>
        )}
      </div>
    </form>
  );
}
