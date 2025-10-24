/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PaperFillIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M20.569 2.508A4.5 4.5 0 0 0 16.334 7v2.167l-.116 8.306-3.384-.806-3.5.833-3.5-.833-3.5.833v-11c0-1.886 0-2.828.586-3.414C3.505 2.5 4.448 2.5 6.334 2.5H19c.588 0 1.107 0 1.569.008M5.834 11.5a1 1 0 0 0 0 2H10.5a1 1 0 0 0 0-2zm0-3.334a1 1 0 0 0 0 2h2.333a1 1 0 0 0 0-2zm16.5-3.666a2.5 2.5 0 0 1 2.5 2.5v2.167h-6.5V7a2.5 2.5 0 0 1 2.5-2.5zm-16.5.333a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2z"
        }
      ></path>
    </svg>
  );
}

export default PaperFillIcon;
/* prettier-ignore-end */
