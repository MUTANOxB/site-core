import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import "@/styles/globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

type ThemeStyle = CSSProperties & {
  "--theme-color-primary": string;
  "--theme-color-secondary": string;
  "--theme-color-background": string;
  "--theme-color-surface": string;
  "--theme-color-text": string;
  "--theme-color-muted-text": string;
  "--theme-color-border": string;
  "--theme-font-display": string;
  "--theme-font-body": string;
  "--theme-radius": string;
  "--theme-shadow": string;
  "--theme-content-max-width": string;
};

const coreFont = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-core-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

const themeStyle: ThemeStyle = {
  "--theme-color-primary": themeConfig.colors.primary,
  "--theme-color-secondary": themeConfig.colors.secondary,
  "--theme-color-background": themeConfig.colors.background,
  "--theme-color-surface": themeConfig.colors.surface,
  "--theme-color-text": themeConfig.colors.text,
  "--theme-color-muted-text": themeConfig.colors.mutedText,
  "--theme-color-border": themeConfig.colors.border,
  "--theme-font-display": themeConfig.fonts.display,
  "--theme-font-body": themeConfig.fonts.body,
  "--theme-radius": themeConfig.radius,
  "--theme-shadow": themeConfig.shadow,
  "--theme-content-max-width": themeConfig.contentWidth,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={coreFont.variable}
      lang={siteConfig.locale}
      style={themeStyle}
    >
      <body>{children}</body>
    </html>
  );
}
