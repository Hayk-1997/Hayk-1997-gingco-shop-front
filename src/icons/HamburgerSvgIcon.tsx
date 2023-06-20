import React, { memo } from 'react';

const HamburgerSvgIcon = (): JSX.Element => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <title></title>
        <g>
          <g>
            <g>
              <polygon
                points="20 18 4 18 4 18 20 18 20 18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>
              <polygon
                points="20 14 4 14 4 14 20 14 20 14"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>
              <polygon
                points="20 10 4 10 4 10 20 10 20 10"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>
              <polygon
                points="20 6 4 6 4 6 20 6 20 6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default memo(HamburgerSvgIcon);
