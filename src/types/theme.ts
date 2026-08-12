export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
}

export interface ThemeFonts {
  display: string;
  body: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fonts: ThemeFonts;
  radius: string;
  shadow: string;
  contentWidth: string;
  spacing: string;
}
