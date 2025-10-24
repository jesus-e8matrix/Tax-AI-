/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.594 31.188c8.612 0 15.594-6.982 15.594-15.594S24.206 0 15.594 0 0 6.982 0 15.594s6.982 15.594 15.594 15.594"
        }
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
