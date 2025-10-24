/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 422 389"}
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
          "M205.374 8.736c56.378 1.647 118.256-12.848 160.994 23.958 44.567 38.382 59.102 102.42 53.765 160.994-4.921 54.004-40.45 97.715-80.654 134.105-37.774 34.19-83.273 56.83-134.105 60.279-54.95 3.728-113.915-2.595-153.626-40.759-40.26-38.692-45.702-97.863-48.635-153.625C-.047 133.622-9.7 63.594 34.689 23.003c43.8-40.052 111.358-16 170.685-14.267"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
