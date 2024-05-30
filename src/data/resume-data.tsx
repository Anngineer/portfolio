import {
  AmbitLogo,
  BarepapersLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
  ParabolLogo,
  YearProgressLogo,
  TastyCloudLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ann Bridge",
  initials: "AB",
  location: "Pennsylvania",
  locationLink: "https://www.google.com/maps/place/Pennsylvania",
  about: "Software Developer",
  summary:
    "Motivated software developer with background in mechanical engineering research. Brings experience in technical writing, accessibility, and proven communication strengths in addition to programming skills.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65789253?v=4",
  personalWebsiteUrl: "https://vercel.com/anngineers-projects/portfolio",
  personalBlogUrl: "https://www.linkedin.com/in/anngineer/",
  contact: {
    email: "AnngineerDev@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Anngineer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anngineer/",
        icon: LinkedInIcon,
      },
      // {name: "X", url: "", icon: XIcon, },
    ],
  },
  education: [
    {
      school: "Community College of Allegheny County",
      degree: "Associate's Degree of Computer Information Systems",
      start: "2023",
      end: "Expected Dec 2024",
      description:
        "Honors Student, Phi Theta Kappa Honor Society, Mu Alpha Theta Math Honor Society, GetWITit Women in Technology",
      gpa: "4.0",
      courses:
        "Data Structures & Algorithms C++, Database Systems, Object Oriented Programming 1 Java, Intro to Programming Java, Information Technology Fundamentals",
    },
    {
      school: "Youngstown State University",
      degree: "Mechanical Engineering Courses",
      start: "2013",
      end: "2016",
      description:
        "Youngstown State University Society of Women Engineers, Youngstown State University ASME, Literary Arts Association",
      gpa: "3.81",
      courses:
        "Calculus 3, Fluid Dynamics, Thermodynamics, Heat Transfer, Kinematics of Machines, Strength of Materials",
    },
    {
      school: "Washington University in St. Louis",
      degree: "Mechanical Engineering Courses",
      start: "2009",
      end: "2013",
      description: "Engineers Without Borders",
      gpa: "3.50",
      courses:
        "Probability & Statistics for Engineering, Engineering & Scientific Computing, Calc 1& 2, Intro to Electrical & Electronic Circuits, Engineering Mechanics I & II, Physics I & II ",
    },
  ],
  published: [
    {
      name: "Comparing the Performance of Ultralight Folding Manual Wheelchairs Using Standardized Tests",
      link: "https://pubmed.ncbi.nlm.nih.gov/32338550/",
      authors:
        "Benjamin Gebrosky, Ann Bridge, Shawn O’Donnell, Garrett G. Grindle, Rosemarie Cooper & Rory A. Cooper",
      journal:
        "Disability and Rehabilitation: Assistive Technology. 2022 Jan; 17:1, 40-49",
      doi: "10.1080/17483107.2020.1754928",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [""],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [""],
      title: "Senior Full Stack Developer",

      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  blog: [
    {
      link: "https://parabol.co",

      title: "Blog Post 1",
      date: "date 2",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      tag: ["tag1", "tag2", "tag3", "tag4"],
    },
    {
      link: "https://parabol.co",

      title: "Blog Post 2",
      date: "date 2",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",

      tag: ["tag1", "tag2", "tag3", "tag4"],
    },
  ],

  skills: [
    "Java",
    "C++",
    "JavaScript",
    "SQL",
    "JavaScript",
    "HTML/CSS",
    "React",
    "basic Python",
    "InDesign",
    "Affinity Designer",
  ],
  projects: [
    {
      title: "Anngineer Blog",
      techStack: ["Blog", "Educational", "Tutorials"],
      description:
        "An educational tech blog about my studies and personal projects",
      link: {
        label: "anngineerblog.com",
        href: "https://anngineer.github.io/writing-blog/",
      },
    },
    {
      title: "Front End Portfolio",
      techStack: [
        "Front End Project",
        "React",
        "Semantic UI",
        "JSX",
        "JavaScript",
      ],
      description:
        "Compilation of my front end projects with details about their design process",
      link: {
        label: "web dev portfolio",
        href: "https://anngineer.github.io/web-dev-portfolio/",
      },
    },
    {
      title: "Character Creator",
      techStack: [
        "Front End Project",
        "React",
        "Semantic UI",
        "JSX",
        "JavaScript",
      ],
      description:
        "Role playing game character builder using the D&D 5th Edition API",
      link: {
        label: "character creator",
        href: "https://anngineer.github.io/character-creator/",
      },
    },
    {
      title: "Resource Page Template",
      techStack: [
        "Front End Project",
        "React",
        "Semantic UI",
        "JSX",
        "JavaScript",
      ],
      description:
        "Resource page designed for categorizing and presenting information for a nonprofit",
      link: {
        label: "resource hub",
        href: "https://anngineer.github.io/resource-hub/",
      },
    },
    {
      title: "Interactive Journal",
      techStack: [
        "Front End Project",
        "Audio/Animation",
        "Semantic UI",
        "JavaScript",
      ],
      description:
        "Aesthetic mindfulness-focused journaling or messaging application to record thoughts",
      link: {
        label: "interactive journal",
        href: "https://anngineer.github.io/forest-friend-journal/",
      },
    },
    {
      title: "To Do Dog",
      techStack: ["Front End Project", "Animated Sprites", "JavaScript"],
      description:
        "Animated dog responding to use of to-do list that is saved locally on browser",
      link: {
        label: "to do dog",
        href: "https://anngineer.github.io/to-do-dog/",
      },
    },
    {
      title: "Blog Template",
      techStack: [
        "Front End Project",
        "React",
        "Semantic UI",
        "JSX",
        "JavaScript",
      ],
      description: "Light and dark themed front end blog template",
      link: {
        label: "writing blog",
        href: "https://anngineer.github.io/writing-blog/",
      },
    },
  ],
} as const;
