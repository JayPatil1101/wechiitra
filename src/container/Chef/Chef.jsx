import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="CEO's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">We cannot limit ourselves to continuing on the path we have already opened… </p>
        </div>
        <p className="p__opensans"> Attempt to seduce the customer with the latest fashion, the finest design, and the most attentive service. </p>
      </div>

      <div className="app__chef-sign">
        <p>Sumati Deshmukh</p>
        <p className="p__opensans">CEO & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;