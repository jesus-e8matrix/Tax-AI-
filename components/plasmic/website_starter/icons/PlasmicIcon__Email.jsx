/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EmailIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 17"}
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
          "m.23 16.299 7.988-8.617 3.102 2.72 3.14-2.708 7.975 8.617L.23 16.3z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M.618 0h21.417l-10.69 9.504zm7.2 7.3L0 15.733V.357zm7.017 0L22.641.381v15.302A1267 1267 0 0 1 14.835 7.3"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default EmailIcon;
/* prettier-ignore-end */
