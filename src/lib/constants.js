export const RAZORPAY_DONATE_URL =
  "https://pages.razorpay.com/pl_THjCVHCP6VmUSx/view";

// Temporary hot-news banner on the home page. Set to `null` when the operation
// closes — `ActiveOperationBar` renders nothing without it. Not dismissible by
// design, so there's no per-visitor state to key off an id.
export const ACTIVE_OPERATION = {
  eyebrow: "Active Operation",
  title: "Assam Flood Response 2026",
  description: "Our team is working continuously on the ground in Assam.",
  donateLabel: "Donate Now — Assam Flood Response 2026",
  donateHref: RAZORPAY_DONATE_URL,
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/JotiFoundation/",
  instagram: "https://www.instagram.com/jotifoundation/",
  linkedin: "https://www.linkedin.com/company/joti-foundation/",
  youtube: "https://www.youtube.com/@jotifoundation",
};

export const CONTACT_DETAILS = [
  {
    icon: "mail",
    label: "Email",
    value: "info@jotifoundation.org",
    href: "mailto:info@jotifoundation.org",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+91-9315064855",
    href: "tel:+919315064855",
  },
  {
    icon: "mapPin",
    label: "Location",
    value: [
      "Gurgaon, Haryana, India - 122102",
      "Muktsar, Punjab, India - 152032",
    ],
  },
];
