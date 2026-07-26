import { FileText, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { REPORTS } from "@/lib/reports";

function ReportCard({ title, year, description, href }) {
  return (
    <Card tone="white" padding="md" className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-label-caps uppercase text-secondary">
            {year}
          </span>
          <h3 className="font-display text-lg font-semibold text-on-background">
            {title}
          </h3>
        </div>
        <FileText
          size={28}
          strokeWidth={1.5}
          className="shrink-0 text-on-surface-variant"
          aria-hidden="true"
        />
      </div>

      {description ? (
        <p className="flex-1 font-sans text-body-md text-on-surface-variant">
          {description}
        </p>
      ) : (
        <div className="flex-1" aria-hidden="true" />
      )}

      <Button
        href={href}
        variant="ghost"
        size="sm"
        className="w-fit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download size={16} strokeWidth={1.5} aria-hidden="true" />
        Download PDF
      </Button>
    </Card>
  );
}

export default function ReportsList() {
  return (
    <section className="pb-section-mobile lg:pb-section-desktop">
      <Container>
        {REPORTS.length === 0 ? (
          <Reveal className="flex flex-col gap-4 rounded border border-card-border bg-surface-container-lowest p-8 md:p-10">
            <span className="font-mono text-label-caps uppercase text-secondary">
              Coming Soon
            </span>
            <p className="max-w-xl font-sans text-body-md text-on-surface-variant">
              We&rsquo;re preparing our first published report. Check back
              here once it&rsquo;s ready.
            </p>
          </Reveal>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REPORTS.map((report, index) => (
              <Reveal key={report.title} delay={(index % 3) * 0.06}>
                <ReportCard {...report} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
