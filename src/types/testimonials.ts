export type TestimonialItem = {
  quote: string;
  name: string;
  role?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};

export type TestimonialsContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: TestimonialItem[];
};
