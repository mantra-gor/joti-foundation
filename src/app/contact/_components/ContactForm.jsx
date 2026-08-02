"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { postJson } from "@/lib/api";
import useFormValidation from "@/lib/useFormValidation";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const SCHEMA = { name: true, email: true, subject: true, message: true };

export default function ContactForm() {
  const { fieldProps, handleSubmit, reset, formRef } = useFormValidation(
    INITIAL_FORM,
    SCHEMA
  );
  const [status, setStatus] = useState("idle");

  const onValid = async (values) => {
    setStatus("loading");
    try {
      await postJson("/api/contact", values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onValid)}
      noValidate
      className="flex flex-col gap-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="Full Name" {...fieldProps("name")} />
        <Input label="Email Address" type="email" {...fieldProps("email")} />
      </div>

      <Input label="Subject" {...fieldProps("subject")} />

      <Textarea label="Message" rows={6} {...fieldProps("message")} />

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
