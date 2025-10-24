/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 271 304"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={".6"}
        fillRule={"evenodd"}
        d={
          "M147.573 4.236c34.667 5.99 61.305 29.84 84.476 56.312 21.213 24.234 40.383 52.31 38.759 84.475-1.566 31.008-27.734 51.913-46.88 76.355-23.781 30.359-38.37 74.304-76.355 80.966-40.666 7.132-80.688-18.28-108.834-48.486C11.526 224.653 2.89 184.896.982 145.023-1.051 102.54-2.877 54.71 27.799 25.249 58.191-3.94 106.051-2.94 147.573 4.236"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
