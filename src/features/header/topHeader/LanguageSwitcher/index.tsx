import { memo, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitcher = (): JSX.Element => {
  const { t } = useTranslation('language');
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = useMemo(
    () => (locales || []).filter((locale) => locale !== activeLocale),
    [locales, activeLocale]
  );

  return (
    <li className="language dropdown">
      <span
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        role="button"
      >
        Language
        <span className="caret"></span>{' '}
      </span>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                {t(locale)}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default memo(LanguageSwitcher);
