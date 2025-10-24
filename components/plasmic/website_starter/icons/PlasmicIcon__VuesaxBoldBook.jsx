/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VuesaxBoldBookIcon(props) {
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
          "M19.532 15.244v2.382a3.34 3.34 0 0 1-3.335 3.335H6.669a3.34 3.34 0 0 1-3.335-3.335v-.62a2.72 2.72 0 0 1 2.716-2.715h12.529c.524 0 .953.43.953.953M14.768 1.905h-6.67c-3.81 0-4.764.953-4.764 4.764v7.222a4.1 4.1 0 0 1 2.716-1.029h12.529a.956.956 0 0 0 .953-.953V6.67c0-3.81-.953-4.764-4.764-4.764zm-2.382 8.337H7.622a.72.72 0 0 1-.715-.714.72.72 0 0 1 .715-.715h4.764a.72.72 0 0 1 .715.715.72.72 0 0 1-.715.714m2.858-3.335H7.622a.72.72 0 0 1-.715-.714.72.72 0 0 1 .715-.715h7.622a.72.72 0 0 1 .715.715.72.72 0 0 1-.715.714"
        }
      ></path>
    </svg>
  );
}

export default VuesaxBoldBookIcon;
/* prettier-ignore-end */
