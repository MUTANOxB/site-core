import type { ComponentPropsWithoutRef, CSSProperties } from "react";

import { themeConfig } from "@/config/theme";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonActionProps = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: never;
    rel?: never;
    target?: never;
  };

type ButtonLinkProps = ButtonBaseProps &
  ComponentPropsWithoutRef<"a"> & {
    disabled?: never;
    href: string;
  };

export type ButtonProps = ButtonActionProps | ButtonLinkProps;

type ButtonVisualStyle = CSSProperties & {
  "--button-background": string;
  "--button-hover-background": string;
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 border font-semibold transition-colors [background-color:var(--button-background)] hover:[background-color:var(--button-hover-background)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:[background-color:var(--button-background)] motion-reduce:transition-none";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

const variantStyles: Record<ButtonVariant, ButtonVisualStyle> = {
  primary: {
    "--button-background": themeConfig.colors.primary,
    "--button-hover-background": themeConfig.colors.secondary,
    borderColor: themeConfig.colors.primary,
    color: themeConfig.colors.background,
  },
  secondary: {
    "--button-background": themeConfig.colors.surface,
    "--button-hover-background": themeConfig.colors.border,
    borderColor: themeConfig.colors.border,
    color: themeConfig.colors.text,
  },
  ghost: {
    "--button-background": "transparent",
    "--button-hover-background": themeConfig.colors.surface,
    borderColor: "transparent",
    color: themeConfig.colors.primary,
  },
};

function getButtonClassName(size: ButtonSize, className?: string) {
  return [baseClasses, sizeClasses[size], className].filter(Boolean).join(" ");
}

function getButtonStyle(
  variant: ButtonVariant,
  style?: CSSProperties,
): ButtonVisualStyle {
  return {
    ...variantStyles[variant],
    borderRadius: themeConfig.radius,
    outlineColor: themeConfig.colors.primary,
    ...style,
  };
}

export function Button(props: ButtonProps) {
  if (typeof props.href === "string") {
    const {
      children,
      className,
      href,
      size = "md",
      style,
      variant = "primary",
      ...anchorProps
    } = props;

    return (
      <a
        {...anchorProps}
        className={getButtonClassName(size, className)}
        href={href}
        style={getButtonStyle(variant, style)}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    className,
    size = "md",
    style,
    type = "button",
    variant = "primary",
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      className={getButtonClassName(size, className)}
      style={getButtonStyle(variant, style)}
      type={type}
    >
      {children}
    </button>
  );
}
