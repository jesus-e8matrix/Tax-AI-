/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BiGraphUpArrow2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".191"}
        d={
          "M19.992 5.621a.81.81 0 0 1 .81.81v5.718a.81.81 0 0 1-1.62 0v-3.45l-4.994 6.106a.81.81 0 0 1-1.2.06L9.37 11.246l-5.158 7.095-.002.003a.811.811 0 0 1-1.31-.952l.002-.003h.001l5.716-7.86a.81.81 0 0 1 1.229-.098l3.653 3.655 4.783-5.845h-4.008a.811.811 0 0 1-.573-1.383.8.8 0 0 1 .573-.237z"
        }
      ></path>
    </svg>
  );
}

export default BiGraphUpArrow2Icon;
/* prettier-ignore-end */
