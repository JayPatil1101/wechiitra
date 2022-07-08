import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Fashion" />
      <h1 className="app__header-h1">Better when it's on you.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We don’t design clothes. We design dreams.</p>
      <button type="button" className="custom__button">Explore Fashion</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;