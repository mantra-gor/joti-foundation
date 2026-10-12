"use client";

import { Siren, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useRegion } from "@/lib/regionContext";
import { MODES_DATA } from "@/lib/modesData";

export default function ActiveOperationBar() {
  const { region } = useRegion();
  const currentMode = MODES_DATA[region] || MODES_DATA.national;
  const bar = currentMode.activeBar;

  if (!bar) return null;

  const isEmergency = region === "national";

  return (
    <aside
      aria-label={`${bar.eyebrow}: ${bar.title}`}
      className="border-b border-on-secondary/20 bg-secondary text-on-secondary"
    >
      <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex items-start gap-3 lg:items-center">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-on-secondary/10"
            aria-hidden="true"
          >
            {isEmergency ? (
              <Siren size={18} strokeWidth={1.5} />
            ) : (
              <Sparkles size={18} strokeWidth={1.5} />
            )}
          </span>
          <div className="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:gap-3">
            <p className="font-mono text-label-caps whitespace-nowrap uppercase text-on-secondary/70">
              {bar.eyebrow}
            </p>
            <p className="font-sans text-body-md">
              <span className="font-semibold uppercase">{bar.title}</span>
              <span className="text-on-secondary/85"> — {bar.description}</span>
            </p>
          </div>
        </div>

        <Button
          href={bar.donateHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="cta"
          inverse
          size="sm"
          className="self-start text-center lg:shrink-0 lg:self-auto"
        >
          {bar.donateLabel}
        </Button>
      </Container>
    </aside>
  );
}
