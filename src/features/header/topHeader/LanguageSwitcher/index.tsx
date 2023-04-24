import { memo } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = (): JSX.Element => {
  const { t } = useTranslation('language');
  const router = useRouter();

  console.log('router', router.pathname);
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
        <li>
          <Link href={'/en' + router.pathname}>{t('ENGLISH')}</Link>
        </li>
        <li>
          <Link href={'/hy' + router.pathname}>{t('ARMENIAN')}</Link>
        </li>
        <li>
          <Link href={'/ru' + router.pathname}>{t('RUSSIAN')}</Link>
        </li>
      </ul>
    </li>
  );
};

export default memo(LanguageSwitcher);
