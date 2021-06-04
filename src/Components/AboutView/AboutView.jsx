import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import './AboutView.styles.css';

const AboutView = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    let value = window.innerWidth;
    setWidth(value);
  });

  return (
    <section className="about" id="about">
      {width <= 960 && <Title name="about" />}
      <div className="about__container">
        <div className="about__infoContainer">
          <div className="about__row">
            <div className="about__infoText">
              <p className="info__title">
                About <span className=""></span>
              </p>
              <p className="info__headline">
                Ambitious designs for&nbsp;<span>Interior Project.</span>
              </p>
              <p className="info__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum sunt eveniet ratione minima at
                voluptatem modi nulla reiciendis ad quae, similique repellat commodi, hic tempora quos quam, ullam quis.
              </p>
            </div>
            <div className="about__infoImg">
              <div className="about__infoImg__container">
                <img className="about__infoImg--main" src="https://picsum.photos/600/400" alt="main" />
                <img className="about__infoImg--bg" src="https://picsum.photos/600/400" alt="" />
              </div>
            </div>
          </div>
          <div className="about__row">
            <div className="about__infoImg">
              <div className="about__infoImg__container">
                <img className="about__infoImg--main" src="https://picsum.photos/600/400" alt="main" />
                <img className="about__infoImg--bg" src="https://picsum.photos/600/400" alt="" />
              </div>
            </div>
            <div className="about__infoText">
              <p className="info__title">- About</p>
              <p className="info__headline">
                Ambitious designs for&nbsp;<span>Interior Project.</span>
              </p>
              <p className="info__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum sunt eveniet ratione minima at
                voluptatem modi nulla reiciendis ad quae, similique repellat commodi, hic tempora quos quam, ullam quis.
              </p>
            </div>
          </div>
        </div>
        <div className="about__seeMore">
          <Link to="/about">See More</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutView;