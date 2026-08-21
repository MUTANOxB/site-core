import type { ThemeConfig } from "@/types/theme";

export const themeConfig: ThemeConfig = {
  colors: {
    primary: "#171512",
    primaryContrast: "#F0E6D8",
    primaryHover: "#29251F",
    secondary: "#633E32",
    background: "#F0E6D8",
    surface: "#E5DDD2",
    text: "#171512",
    mutedText: "#685F57",
    border: "#CDC1B3",
  },
  fonts: {
    display: "var(--font-core-display)",
    body: "var(--font-core-sans)",
  },
  radius: "0.625rem",
  shadow: "0 8px 24px rgb(23 23 23 / 0.06)",
  contentWidth: "90rem",
  spacing: "0.25rem",
};
