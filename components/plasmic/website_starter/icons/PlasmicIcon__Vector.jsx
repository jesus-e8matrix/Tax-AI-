/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 504 448"}
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
          "M246.183 1.671c66.456-11.927 125.337 42.252 172.535 90.533 46.551 47.619 90.912 106.239 84.631 172.534-5.978 63.108-61.863 107.341-114.492 142.674-41.944 28.158-92.289 26.301-142.674 29.974-57.123 4.165-118.32 25.494-165.112-7.535C29.195 393.233-8.322 327.457 1.595 264.738c9.362-59.205 83.748-76.127 124.562-120.025C170.216 97.325 182.496 13.102 246.183 1.671"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
