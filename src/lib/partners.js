/**
 * Institutions Joti Foundation works alongside, shown in the Home page ribbon.
 *
 * Every entry is logo artwork supplied by the org. This is factual content, in
 * the same way `stats.js` is: don't add an organisation here to fill out the
 * row, and don't reintroduce text-only entries for relationships with no logo —
 * the ribbon renders images only.
 *
 * Shape:
 *   name          — full legal name. Used as the logo's alt text.
 *   logo          — path under `public/images/clients/`. Required.
 *   width, height — the file's *intrinsic* pixel size, not a display size.
 *                   Required: `next/image` needs it to reserve the right box,
 *                   and the artwork is not a consistent shape (some files are a
 *                   padded 250x200 canvas, Zomato is a tight-cropped 4.7:1
 *                   wordmark). `PartnerRibbon` normalises the display size, so
 *                   these only have to be accurate, not uniform. Read them off
 *                   the file rather than guessing — a wrong ratio letterboxes
 *                   that logo's slot in the row.
 *
 * Listed in filename order so the list can be reconciled against the folder at
 * a glance. Ribbon order is otherwise arbitrary: it scrolls.
 */
export const PARTNERS = [
  {
    name: "Zomato",
    logo: "/images/clients/1.png",
    width: 1253,
    height: 266,
  },
  {
    name: "Asian Disaster Reduction & Response Network",
    logo: "/images/clients/2.jpg",
    width: 585,
    height: 510,
  },
  {
    name: "Project Baala",
    logo: "/images/clients/3.jpeg",
    width: 250,
    height: 200,
  },
  {
    name: "Government of Punjab",
    logo: "/images/clients/4.png",
    width: 250,
    height: 200,
  },
  {
    name: "OYO",
    logo: "/images/clients/5.png",
    width: 250,
    height: 200,
  },
  {
    name: "VisionSpring",
    logo: "/images/clients/6.png",
    width: 250,
    height: 200,
  },
];
