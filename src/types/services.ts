export type ServiceItem = {
  title: string;
  description?: string;
};

export type ServicesContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceItem[];
};
