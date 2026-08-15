import type { ComponentPropsWithoutRef } from "react";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({
  children,
  className,
  style,
  ...props
}: ContainerProps) {
  const classes = [
    "mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      {...props}
      className={classes}
      style={{ maxWidth: "var(--content-max-width)", ...style }}
    >
      {children}
    </div>
  );
}
