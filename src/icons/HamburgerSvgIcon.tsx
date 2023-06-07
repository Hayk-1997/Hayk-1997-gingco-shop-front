import React, { memo } from 'react';

const HamburgerSvgIcon = (): JSX.Element => {
  return (
    <svg
      width="30px"
      height="30px"
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
        {' '}
        <title></title>{' '}
        <g id="Complete">
          {' '}
          <g id="align-justify">
            {' '}
            <g>
              {' '}
              <polygon
                fill="#ffffff"
                points="20 18 4 18 4 18 20 18 20 18"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>{' '}
              <polygon
                fill="#ffffff"
                points="20 14 4 14 4 14 20 14 20 14"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>{' '}
              <polygon
                fill="#ffffff"
                points="20 10 4 10 4 10 20 10 20 10"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>{' '}
              <polygon
                fill="#ffffff"
                points="20 6 4 6 4 6 20 6 20 6"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.24000000000000005"
              ></polygon>{' '}
            </g>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export default memo(HamburgerSvgIcon);
