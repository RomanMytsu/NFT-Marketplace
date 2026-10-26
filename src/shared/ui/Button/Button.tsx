import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router";
import s from "./Button.module.scss";

type ButtonSize = "primary" | "secondary" | "tertiary";
type ButtonVariant = "filled" | "outlined";

type BaseProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
  };

type NavigationButtonProps = BaseProps &
  Omit<LinkProps, "children" | "className"> & {
    to: LinkProps["to"];
  };

export type ButtonProps = NativeButtonProps | NavigationButtonProps;

type ButtonContentProps = Pick<BaseProps, "icon" | "children">;

function ButtonContent({ icon, children }: ButtonContentProps) {
  return (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
}

function getButtonClassName(
  size: ButtonSize,
  variant: ButtonVariant,
  className: string,
): string {
  return [s.button, s[`button--${size}`], s[`button--${variant}`], className]
    .filter(Boolean)
    .join(" ");
}

export const Button = (props: ButtonProps) => {
  if ("to" in props && props.to !== undefined) {
    const {
      to,
      size = "primary",
      variant = "filled",
      icon,
      children,
      className = "",
      ...linkProps
    } = props;

    return (
      <Link
        {...linkProps}
        to={to}
        className={getButtonClassName(size, variant, className)}
      >
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </Link>
    );
  }

  const {
    size = "primary",
    variant = "filled",
    icon,
    children,
    className = "",
    type,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      type={type ?? "button"}
      className={getButtonClassName(size, variant, className)}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </button>
  );
};
