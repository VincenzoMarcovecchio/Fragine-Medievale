import { FunctionComponent, useEffect } from 'react';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import { PageComponentProps } from './page-components.types';

const DefaultPage: FunctionComponent<PageComponentProps> = ({
  page: {
    attributes: { title },
    react: Content
  }
}) => {
  useEffect(() => {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = new Date(
      Date.parse(new Date()) + 258 * 24 * 60 * 60 * 1000
    );
    initializeClock('clockdiv', deadline);
  }, []);
  return (
    <Section>
      <PageSize>
        <img src="./media/hero.jpg" className="hero-img" alt="medieval armor" />
        <h2>{title}</h2>
        <Content />
      </PageSize>
    </Section>
  );
};

export default DefaultPage;
