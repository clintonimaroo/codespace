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
  "genztechies",
  "vercel",
  "wix-studio",
  "kora"
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
    url: "mailto:hello@codespaces.org",
    description: "Email us if you've got inquiries.",
    username: "hello@codespaces.org",
    icon: MailIcon
  },
  {
    name: "x (formerly twitter)",
    url: "https://twitter.com/CodeSpaceHQ",
    description: "Join the conversation! We're buzzing with energy on X.",
    username: "@CodeSpaceHQ",
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
    url: "https://instagram.com/CodesSpace",
    description:
      "Check out our engaging Reels on Instagram to see what we're up to!",
    username: "@CodesSpace",
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
    content: "Imagine running a marathon with no one to cheer you on or lift you when you stumble. Tough, right? We get it! With over a thousand Code Spacers by your side, you’ll be amazed at how much easier your tech journey becomes. From support and resources to mentorship opportunities and a network of like-minded people, this is what home should feel like. Welcome to a community that’s got your back every step of the way!"
  },
  {
    title: "Access to Resources and Tools",
    content: "We know what it feels like when you are on a tech journey but do not have access to essential resources. With the help of our donors who believe in us and your dreams, you can access resources such as data stipends, laptops, and tech courses, ensuring you have everything you need to succeed."
  },
  {
    title: "Career Growth",
    content: `Let’s kick off with one of our favorite quotes. Warning! It’s nothing techy. 

> “If you want to go fast, go alone. If you want to go far, go together.”
> 

Code Spacers are young and passionate techies. With a community of like-minded people, you can participate in hackathons, tackle coding challenges, and skill-building workshops designed to sharpen your expertise. Plus, you can get guidance and support from seasoned industry professionals here to help you navigate your tech career path.`
  }
];

export const upcoming_events = [
  {
    image: "https://pbs.twimg.com/media/GbuMEnOWEAgnWNW?format=jpg&name=large",
    title: "AMA w/ Peace Itimi",
    description: "​Join Peace Itimi for an exclusive AMA (Ask Me Anything) session, where she’ll dive into her journey in building brands and scaling companies in African and emerging markets, crafting impactful stories, and sharing insights from her roles as a growth strategist, educator, and content creator.",
    date: "13th Nov, 2024",
    location: "Online / Hybrid",
    action_link: "https://lu.ma/5xebmpzu?locale=en-GB&tk=WuDgnL",
    action_text: "Register Now",
    icon: MonitorPlayIcon,
    stats: [
      {
        name: "Registered Participants",
        value: 200,
        suffix: "+"
      },

      {
        name: "Judges",
        value: 30,
        suffix: "+"
      }
    ]
  }
];

export const past_events = [
  {
    image: "https://pbs.twimg.com/media/GauyZWqWQAAhoZt?format=jpg&name=large",
    title: "Wix Studio Hack",
    description:
      "The International Day of the Girl Child is celebrated on October 11th every year. As part of our mission to support women and girls in tech, we commemorated this day with a one-day virtual event. The theme: “Girls' Vision for the Future,” was a powerful call to action that highlighted the aspirations of young girls in tech and their role in shaping the future of technology.",
    date: new Date().toISOString(),
    location: "Virtual",
    action_link: "/events/wix-studio-hack",
    action_text: "Watch the Replay!"
  },
  {
    image: "https://pbs.twimg.com/media/GZldN7TXgAkXjGC?format=jpg&name=large",
    title: "International Day of the Girl Child 2024",
    description:
      "The International Day of the Girl Child is celebrated on October 11th every year. As part of our mission to support women and girls in tech, we commemorated this day with a one-day virtual event. The theme: “Girls' Vision for the Future,” was a powerful call to action that highlighted the aspirations of young girls in tech and their role in shaping the future of technology.",
    date: new Date().toISOString(),
    location: "Virtual",
    action_link: "https://www.youtube.com/live/Z-MrZQQyhWI?si=7MVlQjyOY6e2clSM",
    action_text: "Watch the Replay!"
  },
  {
    image: "https://pbs.twimg.com/media/GQGUYcLWIAAxkNn?format=jpg&name=medium",
    title: "Fusion Tech Fest 2024",
    description: 
      "Code Space co-organized Fusion Tech Fest 2024 with GenZTechies. This groundbreaking event brought together Africa's brightest Gen Z tech innovators. The week-long festival offered immersive learning sessions and a high-energy hackathon, where participants collaborated to solve real-world challenges with creative tech solutions. The event concluded with an in-person conference in Lagos, featuring insightful keynotes, hands-on workshops, and invaluable networking opportunities.",
    date: new Date().toISOString(),
    location: "New York, USA",
    action_link: "https://youtu.be/9wDcD6T6OqY?si=3VKp_dl1svpO1pmB",
    action_text: "Experience the Event"
  },
  {
    image: "https://i.ibb.co/xfV4Bj0/shc.jpg",
    title: "Spacers HackConf 2023",
    description:
      "We launched our first-ever hackathon and conference in 2023. Spacers HackConf 2023 was a week-long hackathon, followed by a one-day conference held virtually. The conference had a remarkable lineup of speakers who shared their insightful knowledge, and the hackathon brought together visionary developers, designers, and tech enthusiasts from around the continent. This thought-provoking event allowed Spacers to learn, ideate, and build pan-African solutions.",
    date: "2023",
    location: "San Francisco, USA",
    action_link: "https://www.youtube.com/live/FbVoWNW62uw?si=tu_6GkF2V5Lu96a_",
    action_text: "Catch the Action"
  },
  {
    image: "https://i.postimg.cc/htQFDXQQ/PHOTO-2023-12-30-00-44-54-2.jpg",
    title: "2023 End of Year Picnic",
    description:
      "There’s one thing you need to know about Code Spacers, although we are career-driven, we never slack when it comes to having fun! Our 2023 End of Year Picnic was a blast, filled with unforgettable moments, goal-sharing, and plenty of games. Of course, we captured the fun with some amazing pictures along the way!",
    date: "2023",
    location: "Berlin, Germany",
    action_link: "https://photos.app.goo.gl/JTovdLo23YCRSNiXA",
    action_text: "See What You Missed"
  }
];

export type EventType = (typeof past_events)[number];

export const gallery = [
  {
    label: "Fuse Tech Fest 2024",
    images: [
      "1ZSW9J1bGXNahC5mOO6S-a3GmABghgDKi",
      "1q08LFx75jYwG0Om0uTV757AxXZAtcwEg",
      "1p4dZKvPk55MJdufnlxieOhbCS0_-_8Tz",
      "10pusS6p85iF2QxqTGUfYmjQnFiy9a3_z",
      "1DSZQ0pwoi2QQM22xY0U_T9yT3bIqOJpQ"
    ]
  }
];
