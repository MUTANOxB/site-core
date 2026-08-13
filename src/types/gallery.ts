export type GalleryItem = {
  src: string;
  alt: string;
};

export type GalleryContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: GalleryItem[];
};
