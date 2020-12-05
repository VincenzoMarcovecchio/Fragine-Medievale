import { PageComponentsMap } from './page-components.types';
import DefaultPage from './DefaultPage';
import ContactsPage from './ContactsPage';
import ShopPage from './ShopPage';

const PAGE_COMPONENTS_MAP: PageComponentsMap = {
  default: DefaultPage,
  contacts: ContactsPage,
  shop: ShopPage
};

export default PAGE_COMPONENTS_MAP;
