/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HeadphoneIcon(props) {
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
          "M2.62 17.77a.72.72 0 0 1-.715-.715v-5.431a9.47 9.47 0 0 1 2.706-6.85c1.791-1.82 4.192-2.82 6.774-2.82 5.279 0 9.576 4.296 9.576 9.575v5.43a.72.72 0 0 1-.715.715.72.72 0 0 1-.714-.715v-5.43c0-4.488-3.65-8.147-8.147-8.147-2.2 0-4.24.848-5.754 2.392-1.525 1.553-2.335 3.62-2.297 5.83v5.441c0 .4-.314.724-.714.724z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M5.659 11.862h-.124c-2 0-3.63 1.63-3.63 3.63v1.791c0 2.001 1.63 3.63 3.63 3.63h.124c2 0 3.63-1.629 3.63-3.63v-1.79c0-2.002-1.63-3.63-3.63-3.63zm11.671 0h-.123c-2 0-3.63 1.63-3.63 3.63v1.791c0 2.001 1.63 3.63 3.63 3.63h.124c2 0 3.63-1.629 3.63-3.63v-1.79c0-2.002-1.63-3.63-3.63-3.63z"
        }
      ></path>
    </svg>
  );
}

export default HeadphoneIcon;
/* prettier-ignore-end */
