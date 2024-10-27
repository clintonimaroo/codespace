import { MonitorPlayIcon, PuzzleIcon, TrophyIcon } from "lucide-react";

export const what_we_do = [
  {
    title: "Hackathons",
    description:
      "When passionate minds come together, they build amazing products for real people with real problems. Our hackathons aren’t just for developers. They’re for anyone with tech skills ready to turn ideas into products that make a difference.",
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
      "We’ve successfully completed our first major challenge, pushing participants to innovate and build impactful tech solutions."
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
