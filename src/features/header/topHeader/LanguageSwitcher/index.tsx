const LanguageSwitcher = (): JSX.Element => {
  return (
    <li className="language dropdown">
      <span
        className="dropdown-toggle"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        role="button"
      >
        Language
        <span className="caret"></span>{' '}
      </span>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li>
          <a href="https://html.lionode.com/darklook/#">English</a>
        </li>
        <li>
          <a href="https://html.lionode.com/darklook/#">French</a>
        </li>
        <li>
          <a href="https://html.lionode.com/darklook/#">German</a>
        </li>
      </ul>
    </li>
  );
};

export default LanguageSwitcher;
