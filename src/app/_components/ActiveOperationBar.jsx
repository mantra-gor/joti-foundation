import { Siren } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ACTIVE_OPERATION } from "@/lib/constants";

export default function ActiveOperationBar() {
  if (!ACTIVE_OPERATION) return null;

  const { eyebrow, title, description, donateLabel, donateHref } =
    ACTIVE_OPERATION;

  return (
    <aside
      aria-label={`${eyebrow}: ${title}`}
      className="border-b border-on-secondary/20 bg-secondary text-on-secondary"
    >
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex items-start gap-3 lg:items-center">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-on-secondary/10"
            aria-hidden="true"
          >
            <Siren size={18} strokeWidth={1.5} />
          </span>
          <div className="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:gap-3">
            <p className="font-mono text-label-caps whitespace-nowrap uppercase text-on-secondary/70">
              {eyebrow}
            </p>
            <p className="font-sans text-body-md">
              <span className="font-semibold uppercase">{title}</span>
              <span className="text-on-secondary/85"> — {description}</span>
            </p>
          </div>
        </div>

        <Button
          href={donateHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="cta"
          inverse
          size="sm"
          className="self-start text-center lg:shrink-0 lg:self-auto"
        >
          {donateLabel}
        </Button>
      </Container>
    </aside>
  );
}
