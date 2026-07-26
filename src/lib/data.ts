export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Senior Project Officer · AI Engineer @ CeRAI, IIT Madras",
  name: "Balayogi G, PhD",
  subtitle:
    "Human–Centered AI · HCI · Responsible AI, building accessible, ethical, and explainable AI systems.",
  location: "India",
};

export const about = {
  paragraphs: [
    "I am a computer science researcher passionate about leveraging data-driven approaches to solve complex challenges and generate impactful insights. Currently, I work on a Conversational AI Evaluation Tool at the Centre for Responsible AI (CeRAI), Indian Institute of Technology Madras, designed for systematically evaluating chatbot performance — part of a broader interest in creating practical, inclusive, and secure solutions for human–AI interaction.",
    "My earlier research focused on developing accessible and secure user authentication models for persons with disabilities, drawing on principles of usable security to design systems that are both functional and inclusive. I hold a Ph.D. in Computer Science from Pondicherry University, specializing in Human–Computer Interaction (HCI) and Usable Security.",
    "Beyond this, I maintain a strong interdisciplinary curiosity for emerging domains such as Quantum Computing, Spatial Computing, and Generative AI — constantly exploring innovative ways to harness these technologies for transformative impact in computer science.",
  ],
  focusAreas: [
    { icon: "Bot", label: "Human-Centered AI" },
    { icon: "Scale", label: "Responsible AI" },
    { icon: "MessagesSquare", label: "Conversational AI" },
    { icon: "Accessibility", label: "Accessibility (HCI)" },
    { icon: "KeyRound", label: "Usable Security" },
    { icon: "Atom", label: "Emerging Tech" },
  ],
};

export type TimelineItem = {
  title: string;
  org: string;
  meta: string;
  description?: string;
};

export const experience: TimelineItem[] = [
  {
    title: "Senior Project Officer – AI Engineer",
    org: "Centre for Responsible AI (CeRAI), IIT Madras",
    meta: "Nov 2025 – Present · Chennai",
    description:
      "Leading work on the Conversational AI Evaluation Tool, building systematic methods to assess chatbot performance, quality, and reliability.",
  },
  {
    title: "Project Associate – AI Engineer",
    org: "Centre for Responsible AI (CeRAI), IIT Madras",
    meta: "May 2025 – Nov 2025 · Chennai",
    description:
      "Contributed to the Conversational AI Evaluation Tool project from its early stages.",
  },
];

export const education: TimelineItem[] = [
  {
    title: "Ph.D., Computer Science",
    org: "Pondicherry University",
    meta: "Feb 2021 – Jun 2025",
    description:
      "Specialized in Human–Computer Interaction (HCI) and Usable Security, with a focus on accessible authentication for persons with visual impairments.",
  },
  {
    title: "M.Sc., Computer Science",
    org: "Pondicherry University",
    meta: "2017 – 2019",
  },
  {
    title: "B.Sc., Computer Science",
    org: "Achariya Arts and Science College",
    meta: "2014 – 2017",
  },
];

export const researchAreas = [
  {
    icon: "MessagesSquare",
    title: "Conversational AI Evaluation",
    description:
      "Systematic methods for evaluating chatbot performance, quality, and reliability.",
  },
  {
    icon: "Scale",
    title: "Responsible & Ethical AI",
    description:
      "Human-centered, trustworthy AI systems that hold up in the real world.",
  },
  {
    icon: "Accessibility",
    title: "Accessible & Usable Security",
    description:
      "Authentication systems designed for persons with visual impairments and disabilities.",
  },
  {
    icon: "Atom",
    title: "Emerging Technologies",
    description:
      "Exploring Quantum Computing, Spatial Computing, and Generative AI for future impact.",
  },
];

export type Publication = {
  year: string;
  title: string;
  authors: string;
  href?: string;
};

export const publications: Publication[] = [
  {
    year: "2024",
    title:
      "An approach for mitigating cognitive load in password management by integrating QR codes and steganography",
    authors: "Balayogi, G., Kuppusamy, K.S. · Security and Privacy, Wiley (Scopus)",
    href: "https://doi.org/10.1002/spy2.447",
  },
  {
    year: "2023",
    title: "Accessible password strength assessment method for visually challenged users",
    authors:
      "Balayogi, G., Kuppusamy, K.S. · International Journal of Information Security, Springer (SCIE)",
    href: "https://doi.org/10.1007/s10207-023-00714-x",
  },
  {
    year: "2023",
    title: "ARJUNA: An accessible PIN entry model in smartphones for persons with low vision",
    authors: "Balayogi, G., Kuppusamy, K.S. · Internet Technology Letters, Wiley (Scopus)",
    href: "https://doi.org/10.1002/itl2.466",
  },
  {
    year: "—",
    title:
      "LINGPASS: An approach for multilingual passphrase generation by integrating English and Tamil",
    authors: "Balayogi, G., Kuppusamy, K.S. · Internet Technology Letters, Wiley (Scopus)",
    href: "https://doi.org/10.1002/itl2.580",
  },
  {
    year: "—",
    title: "Human-Centric Ethical AI in the Digital World",
    authors: "Balayogi, G.",
  },
  {
    year: "—",
    title: "BEEMA: Braille Adapted Enhanced PIN Entry Mechanism using Arrow keys",
    authors: "Balayogi, G.",
  },
  {
    year: "—",
    title:
      "Touch Pointer Movement-Based PIN Entry in Smartphones to Assist Persons with Visual Impairments",
    authors: "Balayogi, G.",
  },
];

export type Project = {
  title: string;
  description: string;
  status?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Neural Network Pruner",
    description:
      "A Python toolkit to efficiently prune redundant neurons in CNNs while maintaining accuracy.",
    status: "In development",
  },
  {
    title: "Prompt Quality Evaluation Tool",
    description:
      "A lightweight tool for assessing the quality of prompts based on selected metrics.",
    href: "https://github.com/BalayogiG/Prompt_Quality_Evaluator",
  },
  {
    title: "IronSurf Browser",
    description:
      "A customizable Electron-based web browser with a futuristic, HUD-style interface for managing multiple floating panels.",
    href: "https://github.com/BalayogiG/IronSurf",
  },
];

export const technicalSkills = [
  "OCI",
  "Selenium",
  "Automation",
  "Python",
  "JavaScript",
  "MongoDB",
];

export const certifications = [
  "Generative AI for Educators Certificate",
  "Introduction to Robotic Process Automation",
  "Introduction to JavaScript Development",
  "Introduction to Python",
  "M001: MongoDB Basics",
];

export const languagesAndHonors = [
  "English — Native / Bilingual",
  "Tamil — Native / Bilingual",
  "National Eligibility Test (NET)",
];

export const contactLinks = [
  { icon: "Linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/balayogig/" },
  { icon: "Github", label: "GitHub", href: "https://github.com/BalayogiG" },
  { icon: "Twitter", label: "X", href: "https://x.com/balayogig" },
  { icon: "Mail", label: "Email", href: "mailto:balayogistark@gmail.com" },
];

export const site = {
  name: "Balayogi G",
  title: "Balayogi G, PhD | AI Engineer & HCI Researcher, CeRAI IIT Madras",
  description:
    "Balayogi G, PhD — Senior Project Officer / AI Engineer at CeRAI, IIT Madras. Human-centered AI, HCI, and Responsible AI researcher working on accessible, ethical, and explainable systems.",
  contactIntro: "Open to research collaborations and conversations about AI, HCI, and security.",
};
