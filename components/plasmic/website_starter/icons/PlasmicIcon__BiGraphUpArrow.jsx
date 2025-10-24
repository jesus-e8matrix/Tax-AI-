/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BiGraphUpArrowIcon(props) {
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
          "M19.993 5.62a.81.81 0 0 1 .81.811v5.717a.81.81 0 0 1-1.62 0v-3.45l-4.995 6.107a.81.81 0 0 1-1.2.06l-3.618-3.62-5.158 7.096-.002.003a.81.81 0 0 1-1.31-.953l.002-.002h.001l5.716-7.86a.81.81 0 0 1 1.228-.099l3.654 3.656 4.783-5.845h-4.008a.811.811 0 0 1-.573-1.383.8.8 0 0 1 .573-.237h5.717z"
        }
      ></path>
    </svg>
  );
}

export default BiGraphUpArrowIcon;
/* prettier-ignore-end */
