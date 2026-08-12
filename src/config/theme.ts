import type { ThemeConfig } from "@/types/theme";

export const themeConfig: ThemeConfig = {
  colors: {
    primary: "#171717",
    secondary: "#525252",
    background: "#ffffff",
    surface: "#f5f5f5",
    text: "#171717",
    mutedText: "#525252",
    border: "#e5e5e5",
  },
  fonts: {
    display: "var(--font-core-sans)",
    body: "var(--font-core-sans)",
  },
  radius: "0.75rem",
  shadow: "0 8px 24px rgb(0 0 0 / 0.08)",
  contentWidth: "72rem",
  spacing: "0.25rem",
};
