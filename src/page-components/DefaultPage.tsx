import React from 'react';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import Countdown from '../components/Countdown/Countdown';

const DefaultPage = ({
  page: {
    attributes: { title },
    react: Content
  }
}) => {
  return (
    <Section>
      <PageSize>
        <img src="./media/hero.jpg" className="hero-img" alt="medieval armor" />
        <h1>Coming Soon</h1>
        <Countdown date={`2021-08-17T00:00:00`} />
        <Content />
      </PageSize>
    </Section>
  );
};

export default DefaultPage;
