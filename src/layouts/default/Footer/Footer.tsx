import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Footer.module.scss';
import { getNavigation } from 'models/navigation';
import { getGeneralSettings } from 'models/settings';
import Navigation from 'components/Navigation/Navigation';

interface Props {}

const Footer: FunctionComponent<Props> = ({}) => {
  const { brandName } = getGeneralSettings();
  const { links } = getNavigation('footer');
  const copyright = `© ${brandName} ${new Date().getFullYear()}`;

  return (
    <>
      <br />
      <br />
      <br />
      <footer className={styles.footer}>
        <PageSize className={styles.inner}>
          <div className={styles.copy}>{copyright}</div>
          <nav>
            <Navigation activeClassName={styles.active} links={links} />
          </nav>
        </PageSize>
        <br />

        <PageSize className={styles.inner}>
          <img
            src="/media/regioneabruzzo.jpg"
            className="logo-footer"
            alt="proloco fraine"
          />
        </PageSize>
      </footer>
    </>
  );
};

export default Footer;
