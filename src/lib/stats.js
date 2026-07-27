/**
 * Verified programme statistics, transcribed from the organisation's own
 * reporting (see `data.md` at the repo root).
 *
 * These are factual claims made by Joti Foundation — transcribe them exactly.
 * Don't round, paraphrase, or invent additional figures to fill a layout.
 * Every stat rendered anywhere on the site should come from this file so the
 * numbers can never drift apart between pages.
 */

/**
 * Canonical headline figures. Consumers below compose ordered selections from
 * these rather than re-typing values, so a correction here fixes every page.
 */
const STAT = {
  responseTime: { value: "Under 24h", label: "Response Time" },
  floodBeneficiaries: { value: "25,000+", label: "People Reached" },
  spectacles: { value: "10,000+", label: "Spectacles Provided" },
  safeWaterUsers: { value: "30,000", label: "Daily Safe Water Users" },
  childrenScreened: {
    value: "250,000+",
    label: "Children Screened - Eyes Health",
  },
  activeVolunteers: { value: "100+", label: "Joti Volunteers" },
  borderVillages: { value: "20+", label: "Border Villages Served In Punjab" },
  continuousRescue: { value: "25+", label: "Days Continuous Rescue" },
  assamVillages: {
    value: "10",
    label: "Villages in Sivasagar District, Assam",
  },
};

/** Home hero strip — the four figures that carry the most weight above the fold. */
export const HEADLINE_STATS = [
  STAT.responseTime,
  STAT.floodBeneficiaries,
  // STAT.childrenScreened,
  STAT.safeWaterUsers,
  STAT.activeVolunteers,
];

/** Full cross-programme impact set, "Volunteers, Impact & Stories from the Field". */
export const IMPACT_STATS = [
  // STAT.floodBeneficiaries,
  STAT.childrenScreened,
  STAT.spectacles,
  // STAT.safeWaterUsers,
  STAT.activeVolunteers,
  STAT.borderVillages,
  STAT.continuousRescue,
  STAT.assamVillages,
];

/** Punjab Floods 2025 — the scale of the crisis JF responded to. */
export const PUNJAB_FLOODS_SCALE = [
  { value: "20", label: "Border Villages Affected" },
  { value: "13,000+", label: "People Directly Affected" },
  { value: "10,000", label: "Acres of Farmland Submerged" },
  { value: "3,309", label: "Households Damaged" },
  { value: "140", label: "Homes Fully Destroyed" },
];

/** Punjab Floods 2025 — what JF delivered on the ground. */
export const PUNJAB_FLOODS_RESPONSE = [
  { value: "25,000+", label: "People Reached" },
  { value: "25+", label: "Days Continuous Rescue" },
  { value: "4,500+", label: "Relief Kits" },
  { value: "3,430", label: "Children Back to School" },
  { value: "3,000+", label: "Families — Sanitation" },
  { value: "1,000+", label: "Evacuated (Elderly & Livestock)" },
  { value: "20", label: "Villages Sanitised" },
  { value: "4", label: "Medical Camps" },
];

/** Punjab Floods 2025 — Recovery & Rehabilitation, "Build Back Better". */
export const BUILD_BACK_BETTER = [
  {
    value: "40",
    title: "Homes Rebuilt",
    description:
      "Flood-resilient shelters with elevated plinths, improved drainage, safe kitchens and sanitation units — settling around 320 individuals.",
  },
  {
    value: "20",
    title: "Schools Reopened",
    description:
      "Classrooms restored from silt, playgrounds cleared and solar lights installed — 3,430 children back to learning.",
  },
  {
    value: "140",
    title: "Homes Assessed",
    description:
      "Full structural assessment of flood-damaged homes to identify families for reconstruction under Phase 1 and Phase 2.",
  },
  {
    value: "10,000",
    title: "Acres Restored",
    description:
      "Farmland reclaimed through dewatering and desilting, then re-sown for the next season — 20,000+ individuals benefitted.",
  },
  {
    value: "20",
    title: "Villages — WASH Support",
    description:
      "Bleaching powder and sanitisation drives across every affected village, with volunteers engaged in rescue, health and recovery.",
  },
  {
    value: "100+",
    title: "Volunteers Mobilised",
    description:
      "Community mobilisation and equitable distribution of resources, fostering long-term resilience in border communities.",
  },
];

/** Anticipatory Action — Cold Wave, Fazilka district, Punjab, Jan–Mar 2026. */
export const COLD_WAVE_2026 = {
  location: "Fazilka District, Punjab",
  period: "Jan–Mar 2026",
  stats: [
    { value: "2,456", label: "Total People Reached" },
    { value: "12", label: "Villages Covered" },
    { value: "19", label: "Awareness Sessions" },
    { value: "10", label: "EWIDGs Formed" },
    { value: "10", label: "Insulation Kits Distributed" },
  ],
  activities: [
    {
      title: "Stakeholder Consultation & Social Mobilisation",
      description:
        "Village Sarpanches, ASHA workers, Anganwadi workers, school teachers and community leaders engaged across 10 villages.",
    },
    {
      title: "Early Warning Dissemination Groups",
      description:
        "10 EWIDGs formed, one per village, to receive IMD alerts and pass cold wave warnings on to every household.",
    },
    {
      title: "1,958 Individuals in Awareness Sessions",
      description:
        "19 sessions covering cold wave risks, insulation techniques, safe heating, layered clothing and protection of the elderly and children.",
    },
    {
      title: "Insulation Support Kits for 10 Vulnerable Households",
      description:
        "Bubble insulation sheets, canvas tarpaulins, green shade nets and mink blankets for the most economically vulnerable.",
    },
  ],
};
