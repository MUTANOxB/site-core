export interface SiteContact {
  whatsapp: string;
  whatsappMessage?: string;
  phone?: string;
  email?: string;
}

export interface SiteSocial {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface SiteAddress {
  label?: string;
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city: string;
  state: string;
  postalCode?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  siteUrl?: string;
  locale: string;
  contact: SiteContact;
  social: SiteSocial;
  address?: SiteAddress;
}
