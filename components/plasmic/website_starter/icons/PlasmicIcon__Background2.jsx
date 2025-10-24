/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Background2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M37.67 19.13A19.35 19.35 0 0 0 34.495 8.5a18.9 18.9 0 0 0-8.455-7.045A18.57 18.57 0 0 0 15.156.368a18.75 18.75 0 0 0-9.644 5.24A19.23 19.23 0 0 0 .36 15.406 19.4 19.4 0 0 0 1.437 26.46a19.07 19.07 0 0 0 6.943 8.583 18.63 18.63 0 0 0 10.467 3.218 18.6 18.6 0 0 0 7.206-1.457 18.8 18.8 0 0 0 6.108-4.147 19.1 19.1 0 0 0 4.08-6.207 19.4 19.4 0 0 0 1.43-7.32z"
        }
      ></path>
    </svg>
  );
}

export default Background2Icon;
/* prettier-ignore-end */
