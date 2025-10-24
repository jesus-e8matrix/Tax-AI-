/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1280 947"}
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
          "M682.838 26.46c127.698 4.849 261.106-34.48 366.902 37.203 124.14 84.119 230.64 216.942 229.49 366.898-1.15 149.363-122.18 263.516-235.1 361.289-103.002 89.181-225.053 154.08-361.292 155.095-137.246 1.022-257.252-66.87-366.712-149.672C182.361 696.085 6.614 598.166.206 430.561-6.266 261.298 141.209 120.981 286.97 34.694 405.04-35.2 545.73 21.252 682.838 26.459z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
