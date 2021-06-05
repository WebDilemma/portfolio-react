import React from 'react';
import { Link } from 'react-router-dom';
import './MobileFooter.styles.css';

const MobileFooter = () => {
  return (
    <div className="mobileFooter">
      <div className="mobileFooter__follow">Follow web dilemma</div>
      <div className="mobileFooter__socialLinks">
        <Link to="https://github.com/WebDilemma">
          <i class="fa fa-github-square" aria-hidden="true"></i>
        </Link>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <a href="mailto:abc@example.com">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
      <div className="mobileFooter__policy">
        <p>about</p>
        <p>Terms & Conditon</p>
        <p>Policy</p>
      </div>
      <div className="mobileFooter__credits"> //2021 web dilemma All rights reserveds</div>
    </div>
  );
};

export default MobileFooter;