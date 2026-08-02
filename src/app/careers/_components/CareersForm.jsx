"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { submitCareersApplication } from "../actions";
import useFormValidation from "@/lib/useFormValidation";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  position: "",
  portfolio: "",
  message: "",
};

// Phone and portfolio are optional, but still format-checked once filled in —
// a mistyped link is worse than no link, since nobody can chase it up.
const SCHEMA = {
  name: true,
  email: true,
  phone: false,
  position: true,
  portfolio: false,
  message: true,
};

export default function CareersForm() {
  const { fieldProps, handleSubmit, reset, formRef } = useFormValidation(
    INITIAL_FORM,
    SCHEMA
  );
  const [status, setStatus] = useState("idle");

  const onValid = async (values) => {
    setStatus("loading");
    try {
      const result = await submitCareersApplication(values);
      if (result?.error) {
        setStatus("error");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded border border-card-border bg-surface-container-lowest p-6">
        <p className="font-sans text-body-lg text-on-background">
          Thanks for applying. We read every application, including speculative
          ones, and will be in touch if there is a fit.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onValid)}
      noValidate
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full name"
          placeholder="Your full name"
          {...fieldProps("name")}
        />
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          {...fieldProps("email")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Phone number"
          type="tel"
          placeholder="+91 00000 00000"
          {...fieldProps("phone")}
        />
        <Input
          label="Role you're applying for"
          placeholder="A posted role, or the role you'd create"
          {...fieldProps("position")}
        />
      </div>

      {/* Link rather than upload: the mailbox ingest API takes JSON only, so
          there is nowhere to put a file. */}
      <Input
        label="Link to your CV or portfolio"
        type="url"
        placeholder="https://drive.google.com/… or https://linkedin.com/in/…"
        {...fieldProps("portfolio")}
      />

      <Textarea
        label="Why this work, and where would you fit?"
        rows={6}
        placeholder="Tell us about your experience, where you're based, and whether you can work in remote, disaster-prone districts."
        {...fieldProps("message")}
      />

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "loading"}
          className="w-fit"
        >
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
