import React, { memo } from 'react';

const GridSvgIcon = (): JSX.Element => {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title></title>
        <g id="Complete">
          <g id="grid">
            <g>
              <rect
                fill="none"
                height="7"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
                width="7"
                x="14.5"
                y="2.5"
              ></rect>
              <rect
                fill="none"
                height="7"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
                width="7"
                x="14.5"
                y="14.5"
              ></rect>
              <rect
                fill="none"
                height="7"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
                width="7"
                x="2.5"
                y="2.5"
              ></rect>
              <rect
                fill="none"
                height="7"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
                width="7"
                x="2.5"
                y="14.5"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(GridSvgIcon);
