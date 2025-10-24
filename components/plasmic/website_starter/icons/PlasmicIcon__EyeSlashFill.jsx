/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EyeSlashFillIcon(props) {
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
          "m16.185 19.368-2.421-2.422a5.251 5.251 0 0 1-6.711-6.712l-3.09-3.09C1.407 9.418 0 12 0 12s4.5 8.25 12 8.25a10.5 10.5 0 0 0 4.185-.882M7.815 4.632A10.5 10.5 0 0 1 12 3.75c7.5 0 12 8.25 12 8.25s-1.409 2.582-3.962 4.857l-3.093-3.093a5.251 5.251 0 0 0-6.71-6.711z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M8.287 11.469a3.75 3.75 0 0 0 4.244 4.244zm7.425 1.062L11.47 8.286a3.75 3.75 0 0 1 4.244 4.244v.001zm4.757 9-18-18 1.062-1.062 18 18z"
        }
      ></path>
    </svg>
  );
}

export default EyeSlashFillIcon;
/* prettier-ignore-end */
