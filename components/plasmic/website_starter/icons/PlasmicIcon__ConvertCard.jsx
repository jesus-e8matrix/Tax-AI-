/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ConvertCardIcon(props) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.429"}
        d={
          "M20.96 14.292a6.665 6.665 0 0 1-6.669 6.67l1-1.668M1.905 8.575a6.665 6.665 0 0 1 6.67-6.67l-1 1.668"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M20.96 4.002v.104c0 .267-.21.477-.476.477h-8.575a.47.47 0 0 1-.477-.477v-.104c0-1.677.42-2.096 2.116-2.096h5.297c1.696 0 2.115.419 2.115 2.096m-9.051 1.534a.47.47 0 0 0-.477.476v1.896c0 1.677.42 2.096 2.116 2.096h5.297c1.696 0 2.115-.42 2.115-2.096V6.012a.47.47 0 0 0-.476-.476zm-.476 9.423v.104c0 .267-.21.477-.476.477H2.38a.47.47 0 0 1-.476-.477v-.104c0-1.677.42-2.097 2.115-2.097h5.298c1.696 0 2.115.42 2.115 2.097zm-9.052 1.533a.47.47 0 0 0-.476.477v1.896c0 1.677.42 2.096 2.115 2.096h5.298c1.696 0 2.115-.42 2.115-2.096v-1.896a.47.47 0 0 0-.476-.477H2.38z"
        }
      ></path>
    </svg>
  );
}

export default ConvertCardIcon;
/* prettier-ignore-end */
