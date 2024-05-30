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
      {
        name: "X",
        url: "",
        icon: XIcon,
      },
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
        "Data Structures and Algorithms C++, Database Systems, Object Oriented Programming 1 Java, Intro to Programming Java, Information Technology Fundamentals",
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
        "Calculus 3, Fluid Dynamics, Thermodynamics 1, Heat Transfer 1, Kinematics of Machines, Strength of Materials",
    },
    {
      school: "Washington University in St. Louis",
      degree: "Mechanical Engineering Courses",
      start: "2009",
      end: "2013",
      description: "Engineers Without Borders",
      gpa: "3.50",
      courses:
        "Probability and Statistics for Engineering, Engineering & Scientific Computing, Calc 1 & 2, Intro to Electrical and Electronic Circuits, Engineering Mechanics I & II, Physics I & II ",
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
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Front End Portfolio",
      techStack: [
        "Front End Project",
        "React",
        "React Router Dom v5",
        "Semantic UI",
        "JSX",
        "JavaScript",
        "HTML",
        "CSS/SCSS",
      ],
      description:
        "Compilation of my front end projects with details about the process",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Character Creator",
      techStack: [
        "Front End Project",
        "React",
        "React Router Dom v5",
        "Axios",
        "Semantic UI",
        "JSX",
        "JavaScript",
        "HTML",
        "CSS/SCSS",
      ],
      description:
        "Role playing game character builder guide using the D&D 5th Edition API",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Resource Page Template",
      techStack: [
        "Front End Project",
        "React",
        "React Router Dom v6",
        "Semantic UI",
        "JSX",
        "JavaScript",
        "HTML",
        "CSS/SCSS",
      ],
      description:
        "Resource page designed for categorizing and presenting information for a nonprofit",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Interactive Journal",
      techStack: ["Front End Project", "Next.js", "Puppeteer"],
      description:
        "Mindfulness-focused journaling or messaging application to record thoughts",
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "To Do Dog",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Animated dog responds to usage of to-do list that is saved locally on browser",
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Blog Template",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Light and dark themed front end blog template",
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
  ],
} as const;
