import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      {/* <h1 className="app__header-h1">The Key To Fine Dining</h1> */}
      <img src={images.tamanna} alt="Slogan" />
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Indian cuisine uses the whole palette of flavors—spicy, sour, sweet, and hot all at the same time, making it something that wants to jump off the plate.<br/><br />
      Indian cuisine is meant to be eaten socially, in groups, until everyone is fully satisfied. You will be served all our courses at once on a plate of food called thali.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img"  />
    </div>
  </div>
);

export default Header;
