import type { ComponentPropsWithoutRef, CSSProperties } from "react";

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
    "--button-background": "var(--color-primary)",
    "--button-hover-background": "var(--color-primary-hover)",
    borderColor: "var(--color-primary)",
    color: "var(--color-primary-contrast)",
  },
  secondary: {
    "--button-background": "var(--color-surface)",
    "--button-hover-background": "var(--color-border)",
    borderColor: "var(--color-border)",
    color: "var(--color-text)",
  },
  ghost: {
    "--button-background": "transparent",
    "--button-hover-background": "var(--color-surface)",
    borderColor: "transparent",
    color: "var(--color-primary)",
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
    borderRadius: "var(--radius-md)",
    outlineColor: "var(--color-primary)",
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
