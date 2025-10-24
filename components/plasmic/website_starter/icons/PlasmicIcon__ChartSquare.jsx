/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChartSquareIcon(props) {
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
          "M15.425 1.906H7.441c-3.468 0-5.536 2.067-5.536 5.535v7.975c0 3.478 2.068 5.545 5.536 5.545h7.974c3.469 0 5.536-2.067 5.536-5.535V7.44c.01-3.468-2.058-5.535-5.526-5.535zM8.679 16.102c0 .267-.21.476-.476.476H5.545a.47.47 0 0 1-.477-.476V11.7c0-.6.486-1.086 1.086-1.086h2.049c.267 0 .476.21.476.476zm4.555 0c0 .267-.21.476-.477.476H10.1a.47.47 0 0 1-.476-.476V7.375c0-.6.486-1.087 1.086-1.087h1.448c.6 0 1.086.486 1.086 1.087v8.727zm4.563 0c0 .267-.21.476-.476.476h-2.658a.47.47 0 0 1-.477-.476V12.72c0-.267.21-.477.477-.477h2.048c.6 0 1.086.486 1.086 1.086z"
        }
      ></path>
    </svg>
  );
}

export default ChartSquareIcon;
/* prettier-ignore-end */
