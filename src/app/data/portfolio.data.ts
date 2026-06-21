import {
  Award,
  Experience,
  NavLink,
  Project,
  SkillGroup,
  SocialLink,
  Stat,
} from '../models/portfolio.models';

export const EMAIL = 'trantiendung1601@gmail.com';
export const GITHUB_URL = 'https://github.com/trandung1601';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/dungtrantien-dev/';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: 'email',
    href: `mailto:${EMAIL}`,
    ariaLabel: 'Email',
    title: 'Email',
  },
  {
    icon: 'github',
    href: GITHUB_URL,
    ariaLabel: 'GitHub',
    title: 'GitHub',
  },
  {
    icon: 'linkedin',
    href: LINKEDIN_URL,
    ariaLabel: 'LinkedIn',
    title: 'linkedin.com/in/dungtrantien-dev',
  },
];

export const STATS: Stat[] = [
  { value: '7', suffix: '+', label: 'Years at Bosch' },
  { value: '99.5', suffix: '%', label: 'Crash-free sessions' },
  { value: '60', suffix: '%', label: 'Faster reporting' },
  { value: '2', label: 'Performance awards' },
];

export const PROJECTS: Project[] = [
  {
    name: 'NOVA',
    role: 'Full-Stack Developer · 2024 – Present',
    status: { label: '● In production', kind: 'prod' },
    description:
      'Enterprise platform for workflow management, data processing, and system integration across international Bosch teams. Built the React / TypeScript frontend wired end-to-end to Spring Boot REST APIs and PostgreSQL.',
    metrics: [
      { emphasis: '25+', text: ' reusable components' },
      { emphasis: '~80%', text: ' test coverage' },
      { emphasis: '~30%', text: ' less duplicate code' },
      { emphasis: '✓', text: ' passed pen-testing' },
    ],
    features: [
      'Established reuse conventions (useCallback / useMemo) that cut duplicate code and improved maintainability.',
      'Authored unit and E2E tests with Playwright, catching regressions on critical Import / Export flows before production.',
      'Shipped to production serving Bosch BBM PMO teams in Germany ahead of the v1.0 release.',
    ],
    stack: [
      { label: 'React.js' },
      { label: 'TypeScript' },
      { label: 'Java' },
      { label: 'Spring Boot' },
      { label: 'PostgreSQL' },
      { label: 'Tailwind CSS' },
      { label: 'Docker' },
      { label: 'Playwright' },
    ],
  },
  {
    name: 'Trailer Safety Control (TSC)',
    role: 'Mobile Developer · 2021 – 2024',
    status: { label: '● Shipped', kind: 'ship' },
    description:
      "Cross-platform mobile app that communicates with vehicle ECU systems for Bosch's trailer sway-control solution — real-time safety diagnostics surfaced through CarPlay and Android Auto.",
    metrics: [
      { emphasis: '98% → 99.5%', text: ' crash-free' },
      { text: 'real-time ECU telemetry' },
      { text: 'CarPlay · Android Auto' },
    ],
    features: [
      'Connected to the vehicle ECU over BLE, handling live telemetry: odometer, diagnostic codes, and safety signals.',
      'Added retry and packet-reassembly logic for intermittent connectivity and multi-packet ECU responses, cutting dropped connections.',
      'Resolved critical production crashes, memory leaks, and BLE failures to lift the crash-free session rate.',
    ],
    stack: [
      { label: 'React Native' },
      { label: 'Java (Android)' },
      { label: 'Swift (iOS)' },
      { label: 'BLE' },
      { label: 'OBD-II' },
      { label: 'CarPlay' },
      { label: 'Android Auto' },
    ],
  },
];

export const EXPERIENCE: Experience = {
  role: 'Senior Full-Stack Developer',
  org: 'Bosch Global Software Technologies',
  when: '2018 – Present · 7+ years · Ho Chi Minh City, Vietnam',
  intro:
    'Delivered production-grade software end-to-end across frontend, backend, and mobile for automotive and enterprise clients, working in Agile / Scrum teams with stakeholders in Germany and Australia. Progressed across three major areas:',
  timeline: [
    {
      period: '2024 – Present',
      title: 'NOVA — Enterprise platform',
      description:
        'Built the React / TypeScript frontend and wired it end-to-end to Spring Boot REST APIs and PostgreSQL. Shipped <b>25+ reusable components</b>, raised test coverage to <b>~80%</b> with Playwright, and delivered to production for Bosch BBM PMO teams in Germany.',
    },
    {
      period: '2021 – 2024',
      title: 'Trailer Safety Control — Automotive mobile',
      description:
        'Developed a cross-platform React Native app talking to the vehicle ECU over BLE for real-time safety diagnostics via CarPlay and Android Auto. Hardened connectivity and crash handling, lifting the crash-free session rate to <b>~99.5%</b>.',
    },
    {
      period: '2018 – 2021',
      title: 'Reporting & Business Intelligence',
      description:
        'Engineered a JasperReports + SQL reporting system and optimized queries to cut report generation <b>~60%</b>. Led the migration to Power BI after deprecation — self-taught and delivered independently, earning a <b>Spot Award</b>. Adopted GitHub Copilot to speed up delivery <b>~50%</b>.',
    },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { label: 'Java', devicon: 'devicon-java-plain colored' },
      { label: 'JavaScript (ES6+)', devicon: 'devicon-javascript-plain colored' },
      { label: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { label: 'React.js', devicon: 'devicon-react-original colored' },
      { label: 'React Hooks', devicon: 'devicon-react-original colored' },
      { label: 'Tailwind CSS', devicon: 'devicon-tailwindcss-original colored' },
      { label: 'Angular', devicon: 'devicon-angularjs-plain colored' },
      { label: 'HTML5', devicon: 'devicon-html5-plain colored' },
      { label: 'CSS3', devicon: 'devicon-css3-plain colored' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { label: 'Java', devicon: 'devicon-java-plain colored' },
      { label: 'Spring Boot', devicon: 'devicon-spring-plain colored' },
      { label: 'REST APIs', symbol: 'ci-api' },
      { label: 'JasperReports', symbol: 'ci-report' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { label: 'React Native', devicon: 'devicon-react-original colored' },
      { label: 'Android', devicon: 'devicon-android-plain colored' },
      { label: 'iOS', devicon: 'devicon-apple-original' },
      { label: 'CarPlay', symbol: 'ci-car' },
      { label: 'Android Auto', symbol: 'ci-car' },
      { label: 'BLE', symbol: 'ci-bt' },
    ],
  },
  {
    category: 'Database',
    items: [
      { label: 'PostgreSQL', devicon: 'devicon-postgresql-plain colored' },
      { label: 'MySQL', devicon: 'devicon-mysql-plain colored' },
      { label: 'SQL Server', devicon: 'devicon-microsoftsqlserver-plain colored' },
      { label: 'Oracle', devicon: 'devicon-oracle-original colored' },
    ],
  },
  {
    category: 'Tools & Process',
    items: [
      { label: 'Git', devicon: 'devicon-git-plain colored' },
      { label: 'Azure DevOps', devicon: 'devicon-azuredevops-plain colored' },
      { label: 'CI/CD', symbol: 'ci-pipe' },
      { label: 'Docker', devicon: 'devicon-docker-plain colored' },
      { label: 'Firebase', devicon: 'devicon-firebase-plain colored' },
      { label: 'Postman', devicon: 'devicon-postman-plain colored' },
      { label: 'Playwright', symbol: 'ci-test' },
      { label: 'Agile / Scrum', symbol: 'ci-cycle' },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      { label: 'GitHub Copilot', symbol: 'ci-bot' },
      { label: 'Cursor', symbol: 'ci-cursor' },
      { label: 'ChatGPT', symbol: 'ci-chat' },
      { label: 'Claude', symbol: 'ci-spark' },
    ],
  },
];

export const AWARDS: Award[] = [
  {
    title: 'Spot Award — Power BI Innovation',
    description:
      'Recognized for proactively learning and applying Power BI to a live project, delivering data insights that improved team visibility and decision-making.',
  },
  {
    title: 'Employee Best Performance Award',
    description:
      'Awarded for outstanding contribution and consistent delivery of high-quality work across projects at Bosch.',
  },
];

export const EDUCATION: Award[] = [
  {
    title: 'HUTECH University · 2016 – 2020',
    description: 'B.Sc. in Information Technology.',
  },
  {
    title: 'Aptech Computer Education · 2018 – 2020',
    description: 'Certificate in Java Programming.',
  },
];
