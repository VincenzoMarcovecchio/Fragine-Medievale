import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import { FunctionComponent } from 'react';
import { PageComponentProps } from './page-components.types';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: string;
}
interface IProductProps {
  product: IProduct;
}

const ShopPage: FunctionComponent<PageComponentProps> = ({
  page: {
    react: Content,
    attributes: { title }
  }
}) => {
  return (
    <>
      <Section>
        <PageSize>
          <h1>{title}</h1>

          <div
            id="snipcart"
            data-api-key="YjNmYTFmMzItMjg3YS00YzRhLWJjN2ItYWU5NmQ5MGQzOWQwNjM3NDI2ODE4OTk5MTM0ODc2"
            hidden
          ></div>
          <Content />
        </PageSize>
      </Section>
    </>
  );
};

export default ShopPage;
