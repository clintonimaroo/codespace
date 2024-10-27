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
