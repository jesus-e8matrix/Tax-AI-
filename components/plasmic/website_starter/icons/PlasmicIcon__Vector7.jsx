/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M20.673 41.346c11.418 0 20.673-9.255 20.673-20.673S32.091 0 20.673 0 0 9.256 0 20.673c0 11.418 9.256 20.673 20.673 20.673"
        }
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
