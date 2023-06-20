import React, { memo } from 'react';

const Pagination = (): JSX.Element => {
  return (
    <div className="pagination-nav text-center mt_50">
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-angle-left" />
          </a>
        </li>
        <li className="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default memo(Pagination);
