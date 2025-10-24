/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
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
          "M0 5.38c.014.842.17 1.675.46 2.463.275.725.624 1.418 1.043 2.068.5.762 1.064 1.479 1.685 2.142a24 24 0 0 0 2.109 2.02 21 21 0 0 0 2.739 2.005c.745.449 1.533.82 2.351 1.108.57.2 1.16.341 1.758.419.848.107 1.71.04 2.533-.197a5.5 5.5 0 0 0 2.145-1.17q.438-.394.8-.861c.158-.222.34-.407.521-.616.141-.16.256-.344.34-.541a1.16 1.16 0 0 0-.073-1.022 2.8 2.8 0 0 0-.74-.813c-.387-.32-.811-.566-1.211-.849q-.45-.3-.934-.541a3.2 3.2 0 0 0-1.054-.32 1.56 1.56 0 0 0-1.333.43c-.219.197-.4.431-.606.653a7 7 0 0 0-.522.689 1.42 1.42 0 0 1-.787.59c-.28.068-.57.068-.849 0a4 4 0 0 1-1.079-.455 11 11 0 0 1-1.684-1.23 14 14 0 0 1-1.443-1.355A6.2 6.2 0 0 1 5.103 8.57a2.2 2.2 0 0 1-.28-.923 1.5 1.5 0 0 1 .522-1.231 7 7 0 0 0 .764-.837q.22-.239.388-.517a1.7 1.7 0 0 0 .145-1.453 3.6 3.6 0 0 0-.606-1.12c-.315-.406-.655-.8-.982-1.231A5.7 5.7 0 0 0 4.291.48a2.2 2.2 0 0 0-.667-.406 1.1 1.1 0 0 0-1.151.222 7 7 0 0 0-.425.443l-.654.726a5.4 5.4 0 0 0-.933 1.54 5.3 5.3 0 0 0-.4 1.612c-.037.295-.049.529-.061.763"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
