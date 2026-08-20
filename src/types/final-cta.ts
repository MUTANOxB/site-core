export type FinalCTAAction = {
  label: string;
  href: string;
};

export type FinalCTAContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction: FinalCTAAction;
  secondaryAction?: FinalCTAAction;
};
