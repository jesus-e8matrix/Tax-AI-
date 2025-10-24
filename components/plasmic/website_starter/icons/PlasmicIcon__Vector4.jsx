/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 217 201"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={".6"}
        fillRule={"evenodd"}
        d={
          "M105.811 4.5c29.047.85 60.927-6.619 82.947 12.344 22.961 19.775 30.45 52.769 27.7 82.947-2.535 27.823-20.84 50.344-41.554 69.092-19.462 17.615-42.903 29.28-69.093 31.057-28.31 1.92-58.69-1.337-79.15-20.999C5.92 159.006 3.115 128.52 1.604 99.791-.024 68.844-4.998 32.764 17.872 11.85 40.439-8.785 75.245 3.607 105.811 4.5"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
