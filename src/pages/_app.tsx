import { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import { Locale } from 'types/app';
import pageContext from 'core/page-context';
import { DEFAULT_LOCALE } from 'core/config';
import PageLoadingProgress from 'components/PageLoadingProgress/PageLoadingProgress';
import 'styles/main.scss';

const MyApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
  router
}) => {
  const locale: Locale = (router.query.locale as Locale) || DEFAULT_LOCALE;

  return (
    <pageContext.Provider value={{ locale }}>
      <PageLoadingProgress />
      <Component {...pageProps} />
    </pageContext.Provider>
  );
};

export default MyApp;
