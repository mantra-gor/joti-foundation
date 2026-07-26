import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Card from "@/components/ui/Card";

// Placeholder org details — swap for the real email, phone, and address
// once the foundation confirms them (see CLAUDE.md "Known pages" note on
// not assuming unconfirmed contact info).
const DETAILS = [
  {
    Icon: Mail,
    label: "Email",
    value: "contact@jotifoundation.org",
    href: "mailto:contact@jotifoundation.org",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  { Icon: MapPin, label: "Office", value: "Gurgaon, Haryana, India" },
  { Icon: Clock, label: "Hours", value: "Mon – Fri, 9:00 AM – 6:00 PM IST" },
];

export default function ContactDetails() {
  return (
    <Card tone="sand" padding="lg" className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-headline-md text-on-background">
          Get in Touch
        </h2>
        <p className="font-sans text-body-md text-on-surface-variant">
          Reach out directly, or use the form and we&rsquo;ll route your message
          to the right team.
        </p>
      </div>

      <ul className="flex flex-col gap-6">
        {DETAILS.map(({ Icon, label, value, href }) => (
          <li key={label} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-outline-variant text-primary">
              <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="font-mono text-label-caps uppercase text-on-surface-variant">
                {label}
              </span>
              {href ? (
                <Link
                  href={href}
                  className="font-sans text-body-md text-on-background transition-colors hover:text-primary"
                >
                  {value}
                </Link>
              ) : (
                <span className="font-sans text-body-md text-on-background">
                  {value}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 border-t border-outline-variant pt-6">
        <p className="font-sans text-body-md text-on-surface-variant">
          Looking to volunteer or support a response effort instead?
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/work-with-us"
            className="font-mono text-label-caps uppercase text-primary transition-colors hover:opacity-80"
          >
            Work With Us →
          </Link>
          <Link
            href="/donate"
            className="font-mono text-label-caps uppercase text-primary transition-colors hover:opacity-80"
          >
            Donate →
          </Link>
        </div>
      </div>
    </Card>
  );
}
