/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CaretRightIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={".953"}
        d={
          "M5.38 2.522a.476.476 0 0 1 .674 0l4.763 4.764a.476.476 0 0 1 0 .673l-4.763 4.764a.476.476 0 0 1-.674-.674l4.427-4.426L5.38 3.195a.476.476 0 0 1 0-.673"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default CaretRightIcon;
/* prettier-ignore-end */
