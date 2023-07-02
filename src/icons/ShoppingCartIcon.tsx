import React, { memo } from 'react';

const ShoppingCartIcon: React.FC = () => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.128"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <polyline points="16 20 56 20 52 44 16 44 16 8 8 8"></polyline>
        <circle cx="20" cy="52" r="4"></circle>
        <circle cx="48" cy="52" r="4"></circle>
      </g>
    </svg>
  );
};

export default memo(ShoppingCartIcon);
