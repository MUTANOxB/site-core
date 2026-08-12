export interface HeroAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
}

export type HeroVariant = "centered" | "split";
