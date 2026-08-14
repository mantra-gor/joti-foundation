"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { postJson } from "@/lib/api";
import useFormValidation from "@/lib/useFormValidation";
import {
  INITIAL_VOLUNTEER,
  VOLUNTEER_SCHEMA,
  WORK_PREFERENCES,
} from "../volunteerFields";

export default function VolunteerForm() {
  const { fieldProps, handleSubmit, reset, formRef } = useFormValidation(
    INITIAL_VOLUNTEER,
    VOLUNTEER_SCHEMA
  );
  const [status, setStatus] = useState("idle");

  const onValid = async (values) => {
    setStatus("loading");
    try {
      await postJson("/api/volunteer", values);
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
          Thanks for applying. Our team will get back to you shortly.
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
      <Input
        label="Full name"
        placeholder="Your full name"
        {...fieldProps("name")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          {...fieldProps("email")}
        />
        <Input
          label="Phone number"
          type="tel"
          placeholder="+91 00000 00000"
          {...fieldProps("phone")}
        />
      </div>

      {/* Optional, and marked so in the label — the component has no visual
          required/optional affordance, and this is the first form on the site
          to mix the two. */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="City (optional)"
          placeholder="Your city"
          {...fieldProps("city")}
        />
        <Input
          label="Country (optional)"
          placeholder="Your country"
          {...fieldProps("country")}
        />
      </div>

      <Select
        label="Preference (optional)"
        options={WORK_PREFERENCES}
        placeholder="No preference"
        {...fieldProps("preference")}
      />

      <Textarea
        label="Message (optional)"
        placeholder="Mention your area of expertise or interest — first aid, search and rescue, logistics, community training, communications…"
        {...fieldProps("message")}
      />

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
