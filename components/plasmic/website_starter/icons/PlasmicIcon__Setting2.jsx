/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Setting2Icon(props) {
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
          "M19.15 8.785c-1.724 0-2.43-1.22-1.572-2.716.496-.867.2-1.972-.667-2.467l-1.648-.944c-.753-.447-1.724-.18-2.172.572l-.105.181c-.858 1.496-2.268 1.496-3.135 0l-.105-.181a1.564 1.564 0 0 0-2.153-.572l-1.648.944a1.82 1.82 0 0 0-.667 2.477c.867 1.486.162 2.706-1.563 2.706-.99 0-1.81.81-1.81 1.81v1.677c0 .99.81 1.81 1.81 1.81 1.725 0 2.43 1.22 1.563 2.716-.496.867-.2 1.972.667 2.467l1.648.944c.753.447 1.725.18 2.172-.572l.105-.181c.858-1.496 2.268-1.496 3.135 0l.105.18c.447.754 1.42 1.02 2.172.573l1.648-.944a1.81 1.81 0 0 0 .667-2.467c-.867-1.496-.162-2.716 1.563-2.716.99 0 1.81-.81 1.81-1.81v-1.677a1.83 1.83 0 0 0-1.82-1.81m-7.717 5.745a3.103 3.103 0 0 1-3.097-3.097 3.103 3.103 0 0 1 3.097-3.096 3.103 3.103 0 0 1 3.096 3.096 3.103 3.103 0 0 1-3.096 3.097"
        }
      ></path>
    </svg>
  );
}

export default Setting2Icon;
/* prettier-ignore-end */
