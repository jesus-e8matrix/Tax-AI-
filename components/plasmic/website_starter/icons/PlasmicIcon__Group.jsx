/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M5.94 6.202A3.101 3.101 0 1 0 5.94 0a3.101 3.101 0 0 0 0 6.202"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M8.756 4.406s4.377-1.51 6.944 2.798c0 0 2.249 4.942-1.79 7.572 0 0-2.692 2.09-6.162.428 0 0-1.157-.57-2.107-3.296 0 0-.46-1.552-1.805-1.662 0 0-2.645-.301-2.265 2.582 0 0 .506 2.123 2.914 1.251 0 0 1.014-.729 1.377-.285 0 0 .578.916-.444 1.41 0 0-1.473 1.108-3.31.285 0 0-1.632-.558-2.107-3.017 0 0-.155-3.814 3.992-3.684 0 0 1.992-.04 2.9 2.4 0 0 .64 2.234 1.484 2.661 0 0 2.181 1.36 4.609-.237 0 0 3.291-2.008 1.188-6.034 0 0-2.103-3.48-6.141-1.235 0 0-.57.428-.914.927 0 0-.227.636-.808.716 0 0-.606.116-.784-.49 0 0-.201-.7.57-1.413-.001-.004 1.28-1.866 2.66-1.677z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={"M2.27 9.595a2.032 2.032 0 1 0 0-4.063 2.032 2.032 0 0 0 0 4.063"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
