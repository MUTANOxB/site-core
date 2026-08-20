export type LocationDirections = {
  label: string;
  href: string;
};

export type LocationContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  address: string;
  directions?: LocationDirections;
};
