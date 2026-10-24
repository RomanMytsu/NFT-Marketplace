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

export const Button = (props: ButtonProps) => {
  const {
    size = "primary",
    variant = "filled",
    icon,
    children,
    className = "",
  } = props;

  const combinedClasses = [
    s.button,
    s[`button--${size}`],
    s[`button--${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className={s.button__icon}>{icon}</span>}
      <span>{children}</span>
    </>
  );

  if ("to" in props && props.to !== undefined) {
    const { to, ...linkProps } = props;

    return (
      <Link {...linkProps} to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  const buttonProps = props;

  return (
    <button
      {...buttonProps}
      type={props.type ?? "button"}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};
