import {
  ChartAreaIcon,
  CrownIcon,
  GlobeIcon,
  HandshakeIcon,
  MonitorPlayIcon,
  PuzzleIcon,
  TrophyIcon,
  UsersRoundIcon,
  MailIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react";

export const values = [
  {
    title: "Impact",
    description:
      "Driving change through technology by empowering Gen Z to build innovative solutions for global challenges.",
    icon: GlobeIcon
  },
  {
    title: "Growth",
    description:
      "Fostering continuous learning and development for our members, enabling them to thrive in the evolving tech landscape.",
    icon: ChartAreaIcon
  },
  {
    title: "Inclusion",
    description:
      "Creating a diverse and welcoming community where everyone, regardless of background, has equal access to opportunities.",
    icon: HandshakeIcon
  },
  {
    title: "Leadership",
    description:
      "Equipping young people with the skills and mentorship needed to become tomorrow's tech leaders and innovators.",
    icon: CrownIcon
  },
  {
    title: "Collaboration",
    description:
      "Encouraging teamwork and knowledge-sharing to create impactful projects and build meaningful connections in the tech space.",
    icon: UsersRoundIcon
  }
];

export type ValueType = (typeof values)[number];

export const what_we_do = [
  {
    title: "Hackathons",
    description:
      "When passionate minds come together, they build amazing products for real people with real problems. Our hackathons aren't just for developers. They're for anyone with tech skills ready to turn ideas into products that make a difference.",
    date: "2024",

    icon: TrophyIcon,
    stats: [
      {
        name: "Participants",
        value: 200,
        suffix: "+"
      },

      {
        name: "Judges",
        value: 30,
        suffix: "+"
      },

      {
        name: "Winners",
        value: 5,
        suffix: "+"
      }
    ]
  },
  {
    title: "Challenges",
    description:
      "Our challenges are fun, skill-building events where Code Spacers take on creative, problem-solving, and time-bound tasks.",
    date: "2024",

    icon: PuzzleIcon,
    stats: [
      {
        name: "Participants",
        value: 200,
        suffix: "+"
      },

      {
        name: "Judges",
        value: 30,
        suffix: "+"
      },

      {
        name: "Winners",
        value: 5,
        suffix: "+"
      }
    ]
  },
  {
    title: "Virtual Events",
    description:
      "We host young African tech talents doing iconic work during our virtual events, and every Space or webinar inspires, educates, and sparks meaningful discussions among community members.",
    date: "2024",

    icon: MonitorPlayIcon,
    stats: [
      {
        name: "Participants",
        value: 200,
        suffix: "+"
      },

      {
        name: "Judges",
        value: 30,
        suffix: "+"
      },

      {
        name: "Winners",
        value: 5,
        suffix: "+"
      }
    ]
  }
];

export type WhatWeDo = (typeof what_we_do)[number];

export const stats = [
  {
    name: "Locations",
    value: 15,
    suffix: "+",
    description:
      "Our community spans across more than 15 cities worldwide, connecting Gen Z technologists from diverse backgrounds."
  },
  {
    name: "Members",
    value: 1000,
    suffix: "+",
    description:
      "With over 1,000 active members, Code Space is growing as a global hub for young innovators and tech enthusiasts."
  },
  {
    name: "Challenge",
    value: 1,
    suffix: "",
    description:
      "We've successfully completed our first major challenge, pushing participants to innovate and build impactful tech solutions."
  },
  {
    name: "Hackathons",
    value: 2,
    suffix: "",
    description:
      "We've hosted two dynamic hackathons where participants collaborated to solve real-world problems through technology."
  },
  {
    name: "Physical Events",
    value: 2,
    suffix: "",
    description:
      "We've hosted two dynamic hackathons where participants collaborated to solve real-world problems through technology."
  },
  {
    name: "Virtual Events",
    value: 20,
    suffix: "+",
    description:
      "Over 20 virtual events, including workshops, panels, and coding challenges, have kept our community engaged and learning year-round."
  }
];

export type StatsType = (typeof stats)[number];

export const brands = [
  "couchbase",
  "technext",
  "theguardian",
  "paystack",
  "aws",
  "genztechies"
];

export const links = [
  { name: "About us", href: "/about-us" },
  { name: "Donate", href: "/donate" },
  { name: "Events", href: "/events" },
  { name: "Shop", href: "/shop" },
  { name: "Gallery", href: "/gallery" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact us", href: "/contact-us" }
];

export const other_links = [
  { name: "Brand Guidelines", href: "/brand-guidelines" },
  { name: "Ambassador Program", href: "/ambassador-program" },
  { name: "Press Feature", href: "/press-feature" }
];

export const socials = [
  {
    name: "email",
    url: "mailto:hello@codespaceafrica.com",
    description: "Email us if you've got inquiries.",
    username: "hello@codespaceafrica.com",
    icon: MailIcon
  },
  {
    name: "x (formerly twitter)",
    url: "https://twitter.com/codespaceafrica",
    description: "Join the conversation! We're buzzing with energy on X.",
    username: "@codespaceafrica",
    icon: XIcon
  },

  {
    name: "facebook",
    url: "https://facebook.com/codespaceafrica",
    description:
      "Follow us on Facebook, and keep in touch with our vibrant community.",
    username: "@codespaceafrica",
    icon: FacebookIcon
  },
  {
    name: "instagram",
    url: "https://instagram.com/codespaceafrica",
    description:
      "Check out our engaging Reels on Instagram to see what we're up to!",
    username: "@codespaceafrica",
    icon: InstagramIcon
  },

  {
    name: "linkedin",
    url: "https://linkedin.com/company/codespaceafrica",
    description:
      "Connect with us on LinkedIn for insights and professional updates!",
    username: "@codespaceafrica",
    icon: LinkedinIcon
  }
];

export const why_us = [
  {
    title: "Community Support",
    content: ""
  },
  {
    title: "Access to Resources and Tools",
    content: ""
  },
  {
    title: "Career Growth",
    content: ""
  }
];

export const past_events = [
  {
    image: "/images/events/hackathon.jpg",
    title: "International Day of the Girl Child 2024",
    description:
      "The International Day of the Girl Child is celebrated on October 11th every year. As part of our mission to support women and girls in tech, we commemorated this day with a one-day virtual event. The theme: “Girls' Vision for the Future,” was a powerful call to action that highlighted the aspirations of young girls in tech and their role in shaping the future of technology.",
    date: new Date().toISOString(),
    location: "Virtual",
    action_link: "/events/int",
    action_text: "View Event"
  },
  {
    image: "/images/events/codefest.jpg",
    title: "CodeFest 2024",
    description:
      "CodeFest 2024 brought together coding enthusiasts from around the world for a weekend of innovation and collaboration. Participants worked on exciting projects, attended workshops, and networked with industry experts.",
    date: new Date().toISOString(),
    location: "New York, USA",
    action_link: "/events/codefest",
    action_text: "View Event"
  },
  {
    image: "/images/events/techsummit.jpg",
    title: "Tech Summit 2024",
    description:
      "Tech Summit 2024 was a premier event that showcased the latest advancements in technology. Attendees had the opportunity to hear from leading tech innovators, participate in panel discussions, and explore cutting-edge products.",
    date: new Date().toISOString(),
    location: "San Francisco, USA",
    action_link: "/events/techsummit",
    action_text: "View Event"
  },
  {
    image: "/images/events/devcon.jpg",
    title: "Developer Conference 2024",
    description:
      "The Developer Conference 2024 was a must-attend event for software developers. It featured hands-on coding sessions, technical talks, and networking opportunities with fellow developers and tech companies.",
    date: new Date().toISOString(),
    location: "Berlin, Germany",
    action_link: "/events/devcon",
    action_text: "View Event"
  }
];

export type EventType = (typeof past_events)[number];
