/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function NotificationIcon(props) {
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
          "m18.427 13.806-.953-1.582c-.2-.352-.381-1.02-.381-1.41v-2.41a5.63 5.63 0 0 0-3.211-5.079 2.79 2.79 0 0 0-2.458-1.42 2.82 2.82 0 0 0-2.468 1.449c-1.858.924-3.144 2.84-3.144 5.05v2.41c0 .39-.181 1.058-.381 1.4l-.963 1.592c-.38.638-.466 1.343-.228 1.991.228.639.771 1.134 1.476 1.372 1.849.63 3.793.934 5.736.934a18.1 18.1 0 0 0 5.736-.924 2.29 2.29 0 0 0 1.43-1.382 2.27 2.27 0 0 0-.191-1.991m-4.297 5.259a2.87 2.87 0 0 1-2.697 1.896 2.83 2.83 0 0 1-2.02-.848 2.6 2.6 0 0 1-.667-1.057c.124.019.248.028.381.047q.332.045.677.076c.543.048 1.096.077 1.648.077.543 0 1.086-.029 1.62-.076.2-.02.4-.03.59-.058l.467-.057z"
        }
      ></path>
    </svg>
  );
}

export default NotificationIcon;
/* prettier-ignore-end */
