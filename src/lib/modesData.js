/**
 * Master Data Module for Joti Foundation Two Operational Modes:
 * 1. "national" -> Emergency Response Across India
 * 2. "punjab"   -> Community Impact in Punjab
 *
 * Source: raw-data-of-two-modes.md
 */

import { RAZORPAY_DONATE_URL } from "./constants";

export const MODES_DATA = {
  national: {
    id: "national",
    modeName: "Emergency Response Across India",
    shortName: "Emergency Response",
    subtitle:
      "Rapid Humanitarian Action Across Flood and Disaster Zones in India",

    // Active Banner at top of page
    activeBar: {
      eyebrow: "ACTIVE OPERATION",
      title: "ASSAM & BIHAR FLOOD RELIEF 2026",
      description:
        "Providing over 100,000 litres of safe water, food supplies, and shelter kits across flood-affected districts.",
      donateLabel: "Support Flood Relief",
      donateHref: RAZORPAY_DONATE_URL,
    },

    // Hero Section
    hero: {
      eyebrow: "Emergency Response Across India",
      headlineLead: "Rapid Humanitarian Action: ",
      headlineAccent: "When Disaster Strikes, Every Second Saves Lives.",
      images: [
        {
          src: "/images/assam-flood-2026/IMG_7269.JPG.jpeg",
          alt: "Three women wade chest-deep through muddy floodwater past a submerged village shopfront in Assam",
        },
        {
          src: "/images/assam-flood-2026/assam-flood-community-meeting.jpg",
          alt: "Community-centred flood response meeting in Sivasagar district, Assam",
        },
        {
          src: "/images/bihar_floods/bihar-flood-community-relief-camp.jpg",
          alt: "Relief camp set up for displaced families during Bihar flood response",
        },
        {
          src: "/images/g25.JPG",
          alt: "A line of Joti Foundation responders in hi-vis vests wading through floodwater with relief sacks on their heads",
        },
        {
          src: "/images/bihar_floods/bihar-flood-boat-supply-mission.jpg",
          alt: "Relief team navigating floodwaters by boat to deliver emergency supplies in Bihar",
        },
        {
          src: "/images/assam-flood-2026/IMG_7277.JPG.jpeg",
          alt: "Residents wait on the tin roof of a flooded market row as brown water surges in Assam",
        },
        {
          src: "/images/assam-flood-2026/assam-flood-relief-distribution.jpg",
          alt: "Distribution of relief kits and food supplies in flood-hit Assam",
        },
        {
          src: "/images/d1.JPG",
          alt: "A relief worker in an orange vest wades through floodwater carrying a supply sack, with rescue boat close behind",
        },
        {
          src: "/images/youth/youth-punjab-flood-rescue-child.jpg",
          alt: "Youth responder carrying a child through floodwaters to safety",
        },
        {
          src: "/images/bihar_floods/bihar-flood-families-relief-carrying.jpg",
          alt: "Families carrying emergency relief rations to safety in Bihar",
        },
        {
          src: "/images/g5.JPG",
          alt: "Responders in life jackets loading supplies into an inflatable rescue boat at a flooded riverbank",
        },
        {
          src: "/images/assam-flood-2026/IMG_7275.JPG.jpeg",
          alt: "Floodwater standing at door height inside a village home in Assam",
        },
      ],
    },

    // Top Stats Strip
    headlineStats: [
      { value: "Under 24h", label: "Response Time" },
      { value: "100,000+ L", label: "Safe Drinking Water Supplied" },
      { value: "2,950+", label: "Families Supported in Assam & Bihar" },
      { value: "25,000+", label: "People Reached in Flood Operations" },
    ],

    // Our Purpose Section
    purpose: {
      eyebrow: "Our Purpose",
      heading: "Resilience Built from Within",
      description:
        "Joti Foundation operates on the front lines of climate change and disaster impact in India. We don't just send help; we build the capacity for communities to save themselves through youth-led first responders, rapid mobile water purification, and dignified recovery.",
      image: "/images/g7.JPG",
      imageAlt: "A volunteer greeting a mother and child during a relief visit",
      visionEyebrow: "By 2036",
      visionTitle: "Our Vision",
      visionText:
        "By 2036, an India where disaster-prone communities are resilient, prepared, and connected, with empowered community youth harnessing modern technology, leading timely life-saving actions, bridging critical access gaps, and building safer futures.",
      visionChips: ["Resilient", "Prepared", "Connected"],
      missionEyebrow: "First 24 Hours",
      missionTitle: "Our Mission",
      missionText:
        "Deliver rapid life-saving rescue and relief starting in the critical first 24 hours, deploy mobile purification to ensure clean water without plastic waste, and assist communities through dignified recovery.",
      missionChips: ["Rapid Rescue", "Clean Water", "Dignified Recovery"],
    },

    // Operational Excellence / 4 Pillars on Home
    operationalExcellence: {
      eyebrow: "Disaster Management Cycle",
      heading: "Operational Excellence in Humanitarian Relief",
      description:
        "Combining tactical rapid deployment with environmental responsibility and deep community trust across India's most vulnerable disaster zones.",
      items: [
        {
          tag: "01 — Assam Flood Response 2026",
          tone: "terracotta",
          title: "Community-Centred Recovery in Sivasagar",
          description:
            "Over 100,000 litres of safe drinking water and essential food, shelter, and hygiene supplies delivered to 2,450 families across 11 villages. Responsible relief with PHED water testing and plastic recycling.",
          image: "/images/assam-flood-2026/assam-flood-community-meeting.jpg",
          alt: "Community meeting during Assam flood response in Sivasagar",
          objectPosition: "object-top",
        },
        {
          tag: "02 — Bihar Flood Response 2026",
          tone: "amber",
          title: "Anticipatory Action & Relief in Munger & Khagaria",
          description:
            "Pre-flood early warnings, safer evacuations, and document protection, followed by relief reaching 500 affected families and 8 villages with mobile water purification.",
          image: "/images/bihar_floods/bihar-flood-boat-supply-mission.jpg",
          alt: "Boat mission supplying flood-affected villages in Bihar",
        },
        {
          tag: "03 — Punjab Floods Relief",
          tone: "forest",
          title: "Continuous Rescue Across 20 Border Villages",
          description:
            "25+ days continuous rescue operations, motor rafts reaching isolated households, 4,500+ relief kits distributed, and 1,000+ vulnerable elderly and livestock evacuated.",
          image: "/images/g25.JPG",
          alt: "A line of Joti Foundation responders wading through deep floodwater carrying relief sacks on their heads",
          objectPosition: "object-top",
        },
        {
          tag: "04 — Mobile Instawater Purification",
          tone: "terracotta",
          title: "Safe Water Without Plastic Waste",
          description:
            "Mobile community water-purification units deployed during emergencies to eliminate waterborne disease risk while preventing thousands of single-use plastic bottles from polluting disaster zones.",
          image:
            "/images/water_related/safe-drinking-water-purification-unit.jpg",
          alt: "Mobile Instawater community water-purification unit installed in the field",
        },
      ],
    },

    // Measurable Change Section
    measurableChange: {
      eyebrow: "Emergency Response Across India",
      heading: "Measurable Impact in Disaster Relief",
      description:
        "From immediate search and rescue in the first 24 hours to responsible relief and long-term recovery, our teams stand with affected families until dignity and normal routines are restored.",
      highlightBox: {
        label: "Response Time",
        value: "Under 24h",
        text: "Rescue and relief starting from the critical first 24 hours of disaster",
      },
      stats: [
        { value: "100,000+ L", label: "Safe Drinking Water Supplied" },
        { value: "2,450", label: "Families Supported in Assam" },
        { value: "500", label: "Families Supported in Bihar" },
        { value: "8", label: "Villages Served by Mobile Water (Bihar)" },
        { value: "25,000+", label: "People Reached in Punjab Floods" },
        { value: "25+", label: "Days Continuous Rescue Operations" },
      ],
    },

    // What We Do Page Data
    whatWeDo: {
      hero: {
        eyebrow: "Emergency Response Across India",
        title: "Across the Complete Disaster Management Cycle",
        description:
          "Joti Foundation is a youth-led, women-led disaster resilience non-profit organisation focused on saving lives, strengthening communities and building resilience across Prevention and Mitigation, Preparedness, Response and Recovery. Guided by the belief that every minute matters during a disaster, JF works to empower and equip local youth to become first responders capable of delivering timely rescue and relief starting from the critical 24 hours after a disaster.",
        image: "/images/g25.JPG",
        alt: "A line of Joti Foundation responders in hi-vis vests wading through floodwater with relief sacks carried on their heads",
      },
      inTheField: {
        eyebrow: "In the Field — Disaster Response",
        title: "Frontline Emergency Response Across India",
        photos: [
          {
            src: "/images/g5.JPG",
            alt: "Responders in life jackets loading supplies into an inflatable rescue boat at a flooded riverbank",
            caption:
              "Loading an inflatable rescue boat bound for cut-off border villages in Punjab.",
          },
          {
            src: "/images/g10.JPG",
            alt: "Villagers carrying boxes and bundles on their heads as they walk out through a flooded brick-walled lane",
            caption:
              "Families moving belongings to higher ground through a flooded lane in Punjab.",
          },
          {
            src: "/images/g12.JPG",
            alt: "Joti Foundation responders in hi-vis vests talking with residents around a clipboard during a needs assessment",
            caption:
              "Assessing house-by-house needs so relief reaches the families worst hit.",
          },
          {
            src: "/images/assam-flood-2026/IMG_7269.JPG.jpeg",
            alt: "Three women wade chest-deep through muddy floodwater in Upper Assam",
            caption:
              "Wading chest-deep through floodwaters in Upper Assam to reach submerged village homesteads.",
          },
          {
            src: "/images/bihar_floods/bihar-flood-boat-supply-mission.jpg",
            alt: "Boat relief supply mission in Munger and Khagaria, Bihar",
            caption:
              "Navigating surging floodwaters by boat to deliver emergency food supplies and hygiene kits in Bihar.",
          },
          {
            src: "/images/youth/youth-flood-relief-clean-water.jpg",
            alt: "Youth volunteers deploying safe drinking water and relief supplies",
            caption:
              "Youth volunteer responders distributing clean drinking water and rations in cut-off areas.",
          },
        ],
      },
      assamResponse: {
        id: "assam-flood-2026",
        eyebrow: "Assam Flood Response 2026",
        title: "Community-Centred Recovery in Upper Assam",
        location: "Sivasagar District, Upper Assam",
        period: "Monsoon 2026",
        paragraphs: [
          "In Upper Assam’s Sivasagar district, Joti Foundation mounted a community-centred flood response, supporting families as they moved from prolonged displacement towards return and recovery. Working alongside local volunteers, community representatives and government authorities, we supplied over 100,000 litres of safe drinking water and provided food, household essentials, shelter and hygiene items to 2,450 families.",
          "Across 11 villages, our teams also supported the cleaning of homes and public spaces and promoted hygiene practices to help families restore safer living conditions. Assistance prioritised households facing the greatest unmet needs, including women managing households alone, older people, persons with disabilities and families who had lost their homes and essential belongings. Community participation helped guide the response, keeping assistance grounded in local priorities and the dignity of those receiving it.",
          "Responsible relief shaped both how assistance reached families and what it left behind. Mobile water purification units reduced dependence on packaged drinking water, providing a community-scale solution while limiting plastic waste. Coordination with the Public Health Engineering Department supported water-quality testing, while local volunteers helped reach families facing barriers to access. Alongside relief delivery, plastic waste was collected, segregated and channelled for recycling in coordination with local authorities and communities.",
        ],
        stats: [
          { value: "100,000+ L", label: "Safe Drinking Water" },
          { value: "2,450", label: "Families Supported" },
          { value: "11", label: "Villages Reached" },
          { value: "Zero Plastic", label: "Waste Segregated & Recycled" },
        ],
        images: [
          {
            src: "/images/assam-flood-2026/IMG_7269.JPG.jpeg",
            alt: "Three women wading chest-deep through floodwaters in Upper Assam",
            caption:
              "Wading chest-deep through floodwaters in Upper Assam, keeping essentials above the waterline.",
          },
          {
            src: "/images/assam-flood-2026/IMG_7277.JPG.jpeg",
            alt: "Residents waiting on rooftops as surge floodwaters submerge market streets below",
            caption:
              "Residents waiting on rooftops of a flooded market row as floodwater surges through the streets.",
          },
          {
            src: "/images/assam-flood-2026/assam-flood-community-meeting.jpg",
            alt: "Community consultation and planning meeting in Sivasagar, Assam",
            caption:
              "Consulting village leadership in Sivasagar to prioritise female-headed households and vulnerable families.",
          },
          {
            src: "/images/assam-flood-2026/assam-flood-relief-distribution.jpg",
            alt: "Direct relief kit distribution in Sivasagar, Assam",
            caption:
              "Relief delivery prioritising female-headed households, elderly individuals, and displaced families.",
          },
          {
            src: "/images/assam-flood-2026/assam-flood-shelter-supplies.jpg",
            alt: "Emergency tarpaulins and shelter materials delivered in Assam",
            caption:
              "Emergency shelter supplies and tarpaulins distributed to restore safer living conditions.",
          },
          {
            src: "/images/assam-flood-2026/IMG_7275.JPG.jpeg",
            alt: "Floodwater standing at door height inside a village home in Assam",
            caption:
              "Floodwaters standing deep inside village homes in Sivasagar district.",
          },
        ],
      },
      biharResponse: {
        id: "bihar-flood-2026",
        eyebrow: "Bihar Flood Response 2026",
        title: "Anticipatory Action & Relief in Munger and Khagaria",
        location: "Munger & Khagaria Districts, Bihar",
        period: "Flood Season 2026",
        paragraphs: [
          "In Bihar, our intervention began with anticipatory action, deploying teams and local volunteers to Munger and Khagaria after forecasts indicated rising flood risk. Communities were supported with early warnings, safer evacuation, movement of livestock, protection of essential documents and identification of vulnerable households.",
          "As flooding intensified, the response transitioned to humanitarian assistance, reaching 500 affected families with essential food supplies, hygiene kits and hygiene promotion, shelter support, 8 villages with safe drinking water through a mobile purification unit and the cleaning of contaminated handpumps.",
          "By connecting early action with timely relief, the intervention helped families prepare before the crisis, remain safer during the floods and take their first steps towards recovery with dignity.",
        ],
        stats: [
          { value: "Early Warning", label: "Anticipatory Forecast Action" },
          { value: "500", label: "Affected Families Reached" },
          { value: "8 Villages", label: "Supplied with Pure Water" },
          { value: "Handpumps", label: "Cleaned & Disinfected" },
        ],
        images: [
          {
            src: "/images/bihar_floods/bihar-flood-boat-supply-mission.jpg",
            alt: "Boat relief supply mission in Munger and Khagaria, Bihar",
            caption:
              "Relief teams navigating floodwaters by boat to deliver emergency food supplies and hygiene kits in Bihar.",
          },
          {
            src: "/images/bihar_floods/bihar-flood-community-relief-camp.jpg",
            alt: "Community relief camp organized for flood-affected families in Bihar",
            caption:
              "Community relief camp established in flooded Bihar, connecting families with immediate shelter and nourishment.",
          },
          {
            src: "/images/bihar_floods/bihar-flood-families-relief-carrying.jpg",
            alt: "Families carrying emergency relief rations in Bihar",
            caption:
              "Families carrying food supplies and hygiene kits back to their homes as flood levels stabilise.",
          },
        ],
      },
    },
  },

  punjab: {
    id: "punjab",
    modeName: "Community Impact in Punjab",
    shortName: "Community Impact",
    subtitle:
      "Children's Eye Health, Youth Leadership, Women's Livelihoods & Water Security",

    // Active Banner at top of page
    activeBar: {
      eyebrow: "FLAGSHIP PROGRAMME",
      title: "ROSHAN PUNJAB & WATER SECURITY",
      description:
        "Over 353,000 children screened and 6 community water-purification units operational across Punjab.",
      donateLabel: "Support Punjab Initiatives",
      donateHref: RAZORPAY_DONATE_URL,
    },

    // Hero Section
    hero: {
      eyebrow: "Community Impact in Punjab",
      headlineLead: "Rooted in Service: ",
      headlineAccent: "Building Healthier, Stronger & Resilient Communities.",
      images: [
        {
          src: "/images/eyes/roshan-punjab-students-spectacles-distribution.jpg",
          alt: "Students holding new spectacles provided under Roshan Punjab",
        },
        {
          src: "/images/women/women-artisan-craft-embroidery.jpg",
          alt: "Rural woman artisan crafting detailed handloom embroidery in Punjab",
        },
        {
          src: "/images/eyes/roshan-punjab-eye-screening-trial-frames.jpg",
          alt: "Child undergoing eye examination with optometrist trial frame in school",
        },
        {
          src: "/images/women/rural-women-self-help-group-meeting.jpg",
          alt: "Rural women self-help group meeting to coordinate artisan enterprise in Sri Muktsar Sahib",
        },
        {
          src: "/images/youth/youth-sports-volunteers-khel-saathis.jpg",
          alt: "Khel Saathis and youth sports volunteers gathered on village sports grounds",
        },
      ],
    },

    // Top Stats Strip
    headlineStats: [
      { value: "353,349", label: "Children Screened — Roshan Punjab" },
      { value: "30,723", label: "Corrective Spectacles Distributed" },
      { value: "60 Villages", label: "Mera Pind Meri Khed Sports" },
      { value: "6 Units", label: "Water Purification Systems Deployed" },
    ],

    // Our Purpose Section
    purpose: {
      eyebrow: "Rooted in a Tradition of Service",
      heading: "Standing Alongside Communities, Supporting Aspirations",
      description:
        "Joti Foundation’s story began long before it had a name, with two generations of a family quietly serving the communities around them. Women, children and youth are at the heart of our work, shaping priorities and helping lead change within their communities. Through education, eye health, youth development, livelihoods, safe water and women’s empowerment, we work to expand opportunities and strengthen self-reliance.",
      image: "/images/women/rural-women-portrait-1.jpg",
      imageAlt: "Portrait of rural woman leader in Punjab",
      visionEyebrow: "Tradition of Service",
      visionTitle: "Our Belief",
      visionText:
        "Every girl deserves an education, every local artisan access to fair markets, every farmer the knowledge to prosper, and every young person the opportunity to choose a hopeful path. Lasting change grows from standing alongside communities, recognising their strengths and supporting their aspirations.",
      visionChips: ["Education for All", "Fair Markets", "Youth Pathways"],
      missionEyebrow: "Grassroots Focus",
      missionTitle: "Our Commitment",
      missionText:
        "Deliver school-based vision care with the Government of Punjab, build sports ecosystems across 60 villages, foster rural women's entrepreneurship, protect menstrual dignity, and deploy clean drinking water infrastructure.",
      missionChips: ["Roshan Punjab", "Mera Pind Meri Khed", "Safe Water"],
    },

    // Operational Excellence / 4 Pillars on Home
    operationalExcellence: {
      eyebrow: "Grassroots Community Impact",
      heading: "Four Pillars of Community Transformation",
      description:
        "Deeply rooted initiatives delivering measurable improvements in child vision, youth leadership, women's financial independence, and safe water security.",
      items: [
        {
          tag: "01 — Children’s Eye Health",
          tone: "terracotta",
          title: "Roshan Punjab — Clearer Vision for a Brighter Future",
          description:
            "Implemented under a formal MoU with the Government of Punjab. 353,349 children screened across five districts and 30,723 corrective spectacles distributed, including 22,121 to first-time wearers.",
          image:
            "/images/eyes/roshan-punjab-students-spectacles-distribution.jpg",
          alt: "School children smiling with newly prescribed spectacles under Roshan Punjab",
          objectPosition: "object-top",
        },
        {
          tag: "02 — Youth Development & Sports",
          tone: "amber",
          title: "Mera Pind Meri Khed — From Playgrounds to Leadership",
          description:
            "Youth-led sports ecosystem across 60 villages of Sri Muktsar Sahib, reaching over 10,000 youth. Dedicated focus on adolescent girls, locally rooted Khel Saathis, and civic responsibility.",
          image: "/images/youth/youth-sports-volunteers-khel-saathis.jpg",
          alt: "Youth sports volunteers and Khel Saathis in Sri Muktsar Sahib",
          objectPosition: "object-top",
        },
        {
          tag: "03 — Women's Economic Independence",
          tone: "forest",
          title: "From Craft to Confidence — Fair Market Access",
          description:
            "Connecting rural women artisans to fair markets through self-help groups, credit access, and our boutique in Chandigarh. Nurturing entrepreneurship across Sri Muktsar Sahib district.",
          image: "/images/women/women-artisan-craft-embroidery.jpg",
          alt: "Rural woman artisan crafting detailed handloom embroidery",
          objectPosition: "object-center",
        },
        {
          tag: "04 — Safe Drinking Water & Hygiene",
          tone: "terracotta",
          title: "Water Security & Dignity for Every Woman",
          description:
            "Deployed 6 community water-purification units (~Rs. 40 lakh) in Punjab. Paired with community menstrual health awareness and free reusable products in Sri Muktsar Sahib.",
          image:
            "/images/water_related/safe-drinking-water-purification-unit.jpg",
          alt: "Community water purification unit installed in Punjab",
        },
      ],
    },

    // Measurable Change Section
    measurableChange: {
      eyebrow: "Community Impact in Punjab",
      heading: "Measurable Impact: Transforming Lives in Punjab",
      description:
        "Our community initiatives bring lasting change directly to schools, village playgrounds, women-led enterprises, and water sources across Punjab.",
      highlightBox: {
        label: "Government Partnership",
        value: "Govt MoU",
        text: "Implemented under a formal MoU with the Government of Punjab",
      },
      stats: [
        { value: "353,349", label: "Children Screened for Vision" },
        { value: "30,723", label: "Corrective Spectacles Distributed" },
        { value: "22,121", label: "First-Time Spectacle Wearers Enabled" },
        { value: "10,000+", label: "Youth Reached Across 60 Villages" },
        { value: "6 Units", label: "Water Purification Systems (₹40 Lakh)" },
        { value: "6,407", label: "Drivers & Community Members Screened" },
      ],
    },

    // What We Do Page Data
    whatWeDo: {
      hero: {
        eyebrow: "Community Impact in Punjab",
        title: "Rooted in Service, Building Resilient Communities",
        description:
          "Joti Foundation’s story began with two generations of a family quietly serving the communities around them. In Punjab, we stand alongside communities across five core pillars: Children's Eye Health (Roshan Punjab), Youth Sports (Mera Pind Meri Khed), Women's Economic Independence, Menstrual Hygiene, and Safe Drinking Water.",
        image:
          "/images/eyes/roshan-punjab-students-spectacles-distribution.jpg",
        alt: "Students holding new spectacles in Punjab school under Roshan Punjab",
      },
      inTheField: {
        eyebrow: "In the Field — Grassroots Impact",
        title: "Community Empowerment Across Punjab",
        photos: [
          {
            src: "/images/eyes/roshan-punjab-students-spectacles-distribution.jpg",
            alt: "Children in Punjab schools receiving custom spectacles",
            caption:
              "Students smiling with their newly fitted spectacles during school distributions under Roshan Punjab.",
          },
          {
            src: "/images/women/rural-women-self-help-group-meeting.jpg",
            alt: "Rural women self-help group gathering in Sri Muktsar Sahib",
            caption:
              "Rural women self-help group members meeting in Sri Muktsar Sahib to coordinate artisan production.",
          },
          {
            src: "/images/water_related/safe-drinking-water-tap-drinking.jpg",
            alt: "Village children accessing pure drinking water from community tap",
            caption:
              "Children accessing clean, pathogen-free drinking water from community purification systems in Punjab.",
          },
          {
            src: "/images/youth/youth-sports-volunteers-khel-saathis.jpg",
            alt: "Khel Saathis engaging village youth in sports",
            caption:
              "Khel Saathis engaging village youth in sports and leadership across playgrounds in Sri Muktsar Sahib.",
          },
          {
            src: "/images/women/women-artisan-craft-embroidery.jpg",
            alt: "Rural woman artisan crafting detailed handloom embroidery",
            caption:
              "Rural woman artisan crafting handloom embroidery to secure fair market wages and financial independence.",
          },
          {
            src: "/images/menstrual_hygiene/menstrual-hygiene-awareness-elder.jpg",
            alt: "Community elders participating in menstrual health dialogue",
            caption:
              "Engaging community elders to dismantle social taboos and promote safe menstrual hygiene practices.",
          },
        ],
      },
      programmes: [
        {
          id: "roshan-punjab",
          eyebrow: "Children’s Eye Health — Roshan Punjab",
          title: "Clearer Vision for a Brighter Future",
          badge: "MoU with Govt. of Punjab",
          lead: "For a child, a pair of spectacles can mean far more than clearer sight; it can restore confidence, classroom participation and the ability to learn.",
          paragraphs: [
            "Childhood vision problems often go unrecognised, with difficulty concentrating or declining classroom performance mistaken for a lack of interest in learning. Implemented under a formal MoU with the Government of Punjab, Roshan Punjab brings eye care closer to children through school-based screening, teacher engagement, optometrist assessments, referral pathways and corrective spectacles.",
            "During Phase I, the programme screened 353,349 children across five districts and distributed 30,723 corrective spectacles, including 22,121 to first-time wearers. A further 1,871 children were referred for assessment and care. The programme also reached 6,407 truck drivers and community members, including targeted vision support for drivers to promote safer roads.",
            "Building on this reach, Phase II will expand to two additional districts through trained teacher Vision Champions and stronger links with Rashtriya Bal Swasthya Karyakram, District Early Intervention Centres and government health facilities. Vision Walls, systematic follow-up and periodic re-screening will help schools sustain early identification and timely care beyond the project period.",
          ],
          stats: [
            { value: "353,349", label: "Children Screened" },
            { value: "30,723", label: "Corrective Spectacles" },
            { value: "22,121", label: "First-Time Wearers" },
            { value: "6,407", label: "Drivers & Community Reached" },
          ],
          images: [
            {
              src: "/images/eyes/roshan-punjab-eye-screening-trial-frames.jpg",
              alt: "Student undergoing eye screening with optometrist trial frame",
              caption:
                "School-based vision assessment using standard optometrist trial frames.",
            },
            {
              src: "/images/eyes/roshan-punjab-optometrist-spectacles-fitting.jpg",
              alt: "Optometrist fitting custom spectacles for a young student",
              caption:
                "Optometrist fitting custom prescription spectacles directly in the classroom.",
            },
          ],
        },
        {
          id: "mera-pind-meri-khed",
          eyebrow: "Youth Development & Sports",
          title: "Mera Pind Meri Khed — From Playgrounds to Future Leadership",
          badge: "60 Villages in Sri Muktsar Sahib",
          lead: "Building a youth-led sports ecosystem across 60 villages of Sri Muktsar Sahib, aiming to reach over 10,000 young people and create spaces where they can play, belong, lead and aspire.",
          paragraphs: [
            "Particular emphasis is placed on adolescent girls and young women, enabling their participation through safe, inclusive spaces and equal opportunities to train, compete and lead.",
            "With locally rooted Khel Saathis, regular sporting engagement, coaching and pathways from village grounds to competitive leagues, sport becomes a means to nurture discipline, confidence, teamwork and leadership.",
            "Beyond the playground, youth are encouraged to grow as informed and responsible citizens, with exposure to constitutional values, civic responsibility and career pathways. They will also actively participate in local development, helping identify village priorities and contributing to community initiatives.",
          ],
          stats: [
            { value: "60 Villages", label: "Coverage in Sri Muktsar Sahib" },
            { value: "10,000+", label: "Youth Reached" },
            { value: "Khel Saathis", label: "Local Mentors & Coaches" },
            { value: "Girls in Sport", label: "Safe & Inclusive Spaces" },
          ],
          images: [
            {
              src: "/images/youth/youth-sports-volunteers-khel-saathis.jpg",
              alt: "Youth sports volunteers and Khel Saathis in Sri Muktsar Sahib",
              caption:
                "Khel Saathis leading village sports sessions and mentoring adolescent youth.",
            },
            {
              src: "/images/youth/youth-volunteer-boat-distribution.jpg",
              alt: "Youth volunteers coordinating community development",
              caption:
                "Empowering village youth to lead local development priorities and civic initiatives.",
            },
          ],
        },
        {
          id: "women-economic-independence",
          eyebrow: "Rural Women's Empowerment",
          title:
            "Economic Independence Among Rural Women: From Craft to Confidence",
          badge: "Chandigarh Boutique & Rural SHGs",
          lead: "Assisting rural women through self-help groups, enabling them to access credit, strengthen enterprise-management skills and build reliable supply chains that connect their craftsmanship with wider markets.",
          paragraphs: [
            "By helping women secure fairer value for their work, we seek to transform traditional skills into sustainable livelihoods and create pathways towards greater financial independence. As women gain greater economic agency, they are better positioned to participate in household decisions and invest in their families’ education, nutrition, healthcare and overall well-being. Beyond improving incomes, this intervention strengthens women’s confidence, dignity and leadership.",
            "Through a dedicated boutique in Chandigarh, we have connected a growing group of women artisans with customers and created a platform for their products to reach wider markets.",
            "Building on this experience, we are now working to nurture entrepreneurship among rural women in Sri Muktsar Sahib district by strengthening business skills, product development, quality standards, financial literacy and market linkages. Our aim is to enable women to progress from skilled producers to confident entrepreneurs who can manage sustainable enterprises, generate reliable incomes and create opportunities for other women within their communities.",
          ],
          stats: [
            { value: "Chandigarh", label: "Dedicated Artisan Boutique" },
            { value: "SHGs", label: "Self-Help Groups & Credit Access" },
            { value: "Fair Value", label: "Sustainable Craft Livelihoods" },
            { value: "Muktsar", label: "Rural Entrepreneurship Hub" },
          ],
          images: [
            {
              src: "/images/women/women-artisan-craft-embroidery.jpg",
              alt: "Rural woman artisan crafting detailed handloom embroidery",
              caption:
                "Artisan transforming traditional handloom craftsmanship into sustainable income.",
            },
            {
              src: "/images/women/rural-women-self-help-group-meeting.jpg",
              alt: "Rural women self-help group meeting",
              caption:
                "Self-help group members meeting to coordinate quality standards and enterprise skills.",
            },
          ],
        },
        {
          id: "menstrual-hygiene",
          eyebrow: "Women’s Dignity & Health",
          title:
            "Menstrual Hygiene Programme — Safety and Dignity for Every Woman",
          badge: "Free Reusable Products & Safe Dialogue",
          lead: "Menstruation is a natural part of life, yet silence, stigma and misinformation continue to prevent many women and adolescent girls from managing it safely and with dignity.",
          paragraphs: [
            "In Sukma, Chhattisgarh, we worked with tribal communities to address menstrual-health challenges through awareness, practical guidance and access to appropriate menstrual products. The initiative created safe spaces for women and girls to discuss menstruation openly, challenge harmful myths and make informed choices about their health. Participants were also provided with free reusable menstrual products and guidance on their safe use and care.",
            "Building on this experience, we continue our menstrual health and hygiene work in Sri Muktsar Sahib district, Punjab. The programme engages women and adolescent girls through community-based awareness, promotes safe hygiene practices and works to reduce the shame and social restrictions associated with menstruation. By combining knowledge, access and dialogue, the initiative seeks to ensure that every woman and girl can manage menstruation safely, confidently and with dignity.",
          ],
          stats: [
            { value: "Free Reusable", label: "Sustainable Menstrual Kits" },
            { value: "Safe Spaces", label: "Open Health Dialogue" },
            { value: "Zero Stigma", label: "Community & School Sessions" },
            { value: "Muktsar", label: "Active Engagement in Punjab" },
          ],
          images: [
            {
              src: "/images/menstrual_hygiene/menstrual-hygiene-tribal-community-woman.jpg",
              alt: "Community woman participating in menstrual health awareness",
              caption:
                "Creating safe spaces for women to discuss menstrual health openly and access reusable products.",
            },
            {
              src: "/images/menstrual_hygiene/menstrual-hygiene-awareness-elder.jpg",
              alt: "Community elder supporting menstrual hygiene education",
              caption:
                "Engaging community elders to dismantle social restrictions and taboos around menstruation.",
            },
          ],
        },
        {
          id: "safe-drinking-water",
          eyebrow: "Water Security & Climate Resilience",
          title: "Safe Drinking Water — Safe Water, Lower Disease Risk",
          badge: "6 Purification Units in Punjab",
          lead: "We approach water security as both a development priority and a cornerstone of climate resilience, bringing together access to safe drinking water, community purification systems, groundwater awareness and sustainable water management.",
          paragraphs: [
            "The Foundation has mobilised and deployed six water-purification units valued at approximately Rs. 40 lakh in Punjab. These systems help protect public health, preserve dignity and maintain access to an essential service when vulnerable communities face an increased risk of waterborne diseases.",
            "This commitment extends into emergencies: mobile community water-purification systems, known as Instawater, were deployed during the Assam and Bihar floods to provide safe drinking water where conventional supply systems had been disrupted.",
            "By reducing dependence on single-use packaged drinking-water bottles during emergencies, this approach also lessens the environmental footprint of humanitarian response meeting an urgent human need without creating an additional environmental burden.",
          ],
          stats: [
            { value: "6 Units", label: "Water Purification Systems Deployed" },
            {
              value: "Rs. 40 Lakh",
              label: "Infrastructure Mobilised in Punjab",
            },
            { value: "Instawater", label: "Mobile Emergency Systems" },
            { value: "Zero Waste", label: "Eliminating Plastic Water Bottles" },
          ],
          images: [
            {
              src: "/images/water_related/safe-drinking-water-purification-unit.jpg",
              alt: "Community water purification unit installed in Punjab",
              caption:
                "Community-scale water purification unit installed to provide safe, clean drinking water.",
            },
            {
              src: "/images/water_related/safe-drinking-water-tap-drinking.jpg",
              alt: "Boy drinking pure safe water from community tap",
              caption:
                "Protecting children from waterborne diseases through reliable village safe water access.",
            },
          ],
        },
      ],
    },
  },
};
