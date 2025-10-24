/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChartIcon(props) {
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
          "M20.96 20.961H1.906a.72.72 0 0 1-.714-.714.72.72 0 0 1 .714-.715h19.056a.72.72 0 0 1 .714.715.72.72 0 0 1-.714.714z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M9.29 3.811v17.15h4.287V3.811c0-1.048-.429-1.906-1.715-1.906h-.857c-1.287 0-1.715.858-1.715 1.906M2.858 9.528V20.96H6.67V9.528c0-1.048-.38-1.906-1.524-1.906h-.762c-1.144 0-1.525.858-1.525 1.906zm13.339 4.764v6.67h3.811v-6.67c0-1.048-.38-1.906-1.524-1.906h-.762c-1.144 0-1.525.858-1.525 1.906"
        }
      ></path>
    </svg>
  );
}

export default ChartIcon;
/* prettier-ignore-end */
