export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
  cta: NavigationItem;
}
