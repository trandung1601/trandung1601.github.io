/** Shared data shapes for the portfolio content. */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  /** Logical key used to pick the inline SVG icon in the template. */
  icon: 'email' | 'github' | 'linkedin';
  href: string;
  ariaLabel: string;
  title: string;
}

export interface Stat {
  /** Number portion shown before the accented suffix, e.g. "99.5". */
  value: string;
  /** Accented suffix such as "+", "%". Optional. */
  suffix?: string;
  label: string;
}

export interface Metric {
  /** Optional accented lead text, e.g. "25+" or "✓". */
  emphasis?: string;
  /** Remaining label text. */
  text: string;
}

/** A technology chip, optionally rendered with a devicon or inline SVG symbol. */
export interface TechChip {
  label: string;
  /** Devicon class, e.g. "devicon-react-original colored". */
  devicon?: string;
  /** Id of an inline SVG <symbol>, referenced via <use href="#id">. */
  symbol?: string;
}

export interface Project {
  name: string;
  role: string;
  status: { label: string; kind: 'prod' | 'ship' };
  description: string;
  metrics: Metric[];
  features: string[];
  stack: TechChip[];
}

export interface TimelineItem {
  period: string;
  title: string;
  /** May contain inline <b> emphasis markup. */
  description: string;
}

export interface Experience {
  role: string;
  org: string;
  when: string;
  intro: string;
  timeline: TimelineItem[];
}

export interface SkillGroup {
  category: string;
  items: TechChip[];
}

export interface Award {
  title: string;
  description: string;
}
