/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M24.762 49.523c13.675 0 24.761-11.086 24.761-24.762C49.523 11.087 38.437 0 24.761 0 11.087 0 0 11.086 0 24.762s11.086 24.761 24.762 24.761"
        }
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
