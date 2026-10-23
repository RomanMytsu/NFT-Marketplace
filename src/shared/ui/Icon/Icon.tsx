import { iconHref, type IconName } from "@/shared/types/spritemap";
import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  width?: number | string;
  height?: number | string;
  className?: string;
};

export function Icon({ name, width, height, className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      className={className}
      width={width}
      height={height}
      focusable="false"
      aria-hidden="true"
    >
      <use href={iconHref(name)} />
    </svg>
  );
}
