export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQItem[];
};
