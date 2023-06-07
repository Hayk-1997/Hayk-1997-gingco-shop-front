import React, { memo, useState } from 'react';

const SearchInput = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <div className="main-search mt_40">
      <input
        id="search-input"
        value={value}
        placeholder="Search"
        className="form-control input-lg"
        autoComplete="off"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="input-group-btn">
        <button type="button" className="btn btn-default btn-lg">
          <i className="fa fa-search" />
        </button>
      </span>
    </div>
  );
};

export default memo(SearchInput);
