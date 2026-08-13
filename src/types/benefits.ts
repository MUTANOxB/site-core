export type BenefitItem = {
  title: string;
  description?: string;
};

export type BenefitsContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: BenefitItem[];
};
