import { Landmark, UserCheck, Compass, ClipboardList, Settings2, Flag } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const teams = [
  {
    title: "Board",
    Icon: Landmark,
    members: ["3 Founders", "+ others to be selected"],
  },
  {
    title: "Advisory Board",
    Icon: UserCheck,
    members: ["To be selected"],
  },
  {
    title: "Strategic Leadership Team",
    Icon: Compass,
    members: [
      "Managing Trustee",
      "Lead - Partnerships & Resource Mobilisation",
      "CEO",
      "Program Head",
      "Manager - HR & Finance",
      "Manager - Communication",
    ],
  },
  {
    title: "Program Management Team",
    Icon: ClipboardList,
    members: ["Program Manager", "Manager - HR & Finance", "Manager - Communication"],
  },
  {
    title: "Operations Management Team",
    Icon: Settings2,
    members: [
      "CEO",
      "Manager - HR & Finance",
      "Manager - Communication",
      "(Invite others occasionally as per need)",
    ],
  },
  {
    title: "Frontline Execution Team",
    Icon: Flag,
    members: ["Lovepreet + 5-member team"],
  },
];

export default function TeamStructure() {
  return (
    <section className="bg-surface-container-low py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Organisational Structure</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Governance to Field Execution
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map(({ title, Icon, members }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <Card tone="white" className="flex h-full flex-col">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded border border-secondary/30 text-secondary">
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-4 font-display text-lg font-semibold text-on-background">
                  {title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {members.map((member) => (
                    <li key={member} className="font-sans text-body-md text-on-surface-variant">
                      {member}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
