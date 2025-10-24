/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CommentFillIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M14.167 6c1.707 0 2.561 0 3.242.257a4 4 0 0 1 2.334 2.334c.257.681.257 1.535.257 3.242s0 2.561-.257 3.242a4 4 0 0 1-2.334 2.335c-.681.256-1.535.257-3.242.257h-5.42a1 1 0 0 0-.707.293l-1.333 1.333c-.63.63-1.707.184-1.707-.707V12.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C8.039 6 9.16 6 11.4 6zM10 12.5a1 1 0 0 0 0 2h2.5a1 1 0 0 0 0-2zm0-3.333a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z"
        }
      ></path>
    </svg>
  );
}

export default CommentFillIcon;
/* prettier-ignore-end */
