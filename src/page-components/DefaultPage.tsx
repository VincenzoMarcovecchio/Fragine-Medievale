import React, { useEffect, useState } from 'react';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import { PageComponentProps } from './page-components.types';
import Countdown from '../components/Countdown/Countdown';
import ReactPlayer from 'react-player';
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
        <div className="intro">
          <h3>{title}</h3>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <ReactPlayer url="https://www.youtube.com/embed/dyjqI3aHfZc" />
          </div>
        </div>
        <Content />
      </PageSize>
    </Section>
  );
};

export default DefaultPage;
