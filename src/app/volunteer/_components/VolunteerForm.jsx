"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { postJson } from "@/lib/api";

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

export default function VolunteerForm() {
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
      await postJson("/volunteer", form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-card-border bg-surface-container-lowest p-6">
        <p className="font-sans text-body-lg text-on-background">
          Thanks for applying. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Full name"
        name="name"
        required
        value={form.name}
        onChange={handleChange}
        placeholder="Your full name"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        required
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
      />
      <Input
        label="Phone number"
        name="phone"
        type="tel"
        required
        value={form.phone}
        onChange={handleChange}
        placeholder="+91 00000 00000"
      />
      <label className="flex flex-col gap-2">
        <span className="font-mono text-label-caps uppercase text-on-surface-variant">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us why you'd like to volunteer and where you're based"
          className="resize-none rounded border border-input-border bg-surface-container-lowest px-4 py-3 font-sans text-body-md text-on-background transition-colors focus:border-primary focus:outline-none"
        />
      </label>

      <div className="flex flex-col gap-3">
        <Button type="submit" variant="primary" disabled={status === "loading"} className="w-fit">
          {status === "loading" ? "Submitting…" : "Submit Application"}{" "}
          <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </Button>
        {status === "error" && (
          <span className="font-sans text-sm text-error">
            Something went wrong. Please try again.
          </span>
        )}
      </div>
    </form>
  );
}
