/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SearchZoomOutIcon(props) {
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
        d={
          "M20.294 20.961a.66.66 0 0 1-.467-.19l-1.772-1.773a.673.673 0 0 1 0-.943.673.673 0 0 1 .944 0l1.772 1.772a.673.673 0 0 1 0 .944.7.7 0 0 1-.477.19"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.429"}
        d={
          "M10.958 2.62c4.598 0 8.337 3.74 8.337 8.337 0 4.598-3.74 8.337-8.337 8.337-4.598 0-8.337-3.739-8.337-8.337s3.739-8.336 8.337-8.336z"
        }
      ></path>
    </svg>
  );
}

export default SearchZoomOutIcon;
/* prettier-ignore-end */
