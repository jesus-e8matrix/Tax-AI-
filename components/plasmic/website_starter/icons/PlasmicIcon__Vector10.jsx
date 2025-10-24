/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 689 531"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M367.424 14.828c68.712 2.717 140.497-19.322 197.422 20.848 66.801 47.14 124.107 121.573 123.485 205.608-.619 83.702-65.743 147.672-126.504 202.463-55.421 49.977-121.095 86.346-194.403 86.914-73.85.573-138.423-37.473-197.322-83.875C98.125 390.081 3.559 335.208.111 241.284-3.372 146.43 75.982 67.797 154.414 19.442c63.531-39.168 139.235-7.533 213.01-4.614"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
