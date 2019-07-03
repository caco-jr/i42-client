import React from 'react';
import Carousel from 'nuka-carousel';

import './style.scss';

const HomeCarousel = (props: any) => {
  const componentClassName = 'c-home-carousel';

  return (
    <section className={componentClassName}>
      <Carousel>
        <section className={`${componentClassName}__item`}>
          <figure>
            <img
              src="https://i0.wp.com/imperio42.com.br/wp-content/uploads/2019/02/james-mcavoy-bruce-willis-glass-1547042569.jpg?fit=3000%2C2000&ssl=1"
              alt=""
              className={`${componentClassName}__image`}
            />
          </figure>
        </section>

        <section className={`${componentClassName}__item`}>
          <figure>
            <img
              src="https://i0.wp.com/imperio42.com.br/wp-content/uploads/2019/04/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg?fit=1310%2C670&#038;ssl=1"
              alt=""
              className={`${componentClassName}__image`}
            />
          </figure>
        </section>
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
