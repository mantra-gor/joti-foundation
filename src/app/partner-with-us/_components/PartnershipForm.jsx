"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { submitPartnershipEnquiry } from "../actions";
import {
  PARTNERSHIP_OTHER,
  PARTNERSHIP_TYPES,
  partnershipSchema,
} from "../partnershipTypes";
import useFormValidation from "@/lib/useFormValidation";

const INITIAL_FORM = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  partnershipType: "",
  partnershipDetail: "",
  message: "",
};

export default function PartnershipForm() {
  const { values, fieldProps, handleSubmit, reset, formRef } =
    useFormValidation(INITIAL_FORM, partnershipSchema);
  const [status, setStatus] = useState("idle");
  const isOther = values.partnershipType === PARTNERSHIP_OTHER;

  const onValid = async (values) => {
    setStatus("loading");
    try {
      const result = await submitPartnershipEnquiry(values);
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
          Thank you. Your enquiry has reached our partnerships desk — we will
          come back to you with programme design, budget and reporting cadence.
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
          label="Your name"
          placeholder="Your full name"
          {...fieldProps("name")}
        />
        <Input
          label="Organisation"
          placeholder="Company, foundation, department or collective"
          {...fieldProps("organisation")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Email address"
          type="email"
          placeholder="you@organisation.org"
          {...fieldProps("email")}
        />
        <Input
          label="Phone number"
          type="tel"
          placeholder="+91 00000 00000"
          {...fieldProps("phone")}
        />
      </div>

      <Select
        label="Type of partnership"
        placeholder="Select the closest fit"
        options={PARTNERSHIP_TYPES}
        {...fieldProps("partnershipType")}
      />

      {isOther && (
        <Input
          label="Please specify"
          placeholder="Tell us what kind of partner you are"
          {...fieldProps("partnershipDetail")}
        />
      )}

      <Textarea
        label="What do you want to change, and where?"
        rows={6}
        placeholder="Tell us about the outcome you're after, the districts or communities involved, and any timeline you're working to."
        {...fieldProps("message")}
      />

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          variant="primary"
          disabled={status === "loading"}
          className="w-fit"
        >
          {status === "loading" ? "Sending…" : "Send Partnership Enquiry"}{" "}
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
