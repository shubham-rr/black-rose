import React from 'react';
import './footer.css';
import trueBlueITLogo from '../../assets/true-blue-it-logo.png';
import codeUpNTLogo from '../../assets/codeupnt-logo.png';
import dihLogo from '../../assets/dih-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h2>Black Rose</h2>
            <p>A project built as a part of CodeUp NT Internship Program at TrueBlue IT Services in collaboration with Darwin Innovation Hub.</p>
            {/* <p>Black Rose is an e-commerce platform designed to meet the unique needs of photographers, providing a wide range of high-quality photography equipment, tools, and accessories.</p> */}
            </div>
          
          <div className="footer-section sponsors">
            <h3>Our Sponsors</h3>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <img src={trueBlueITLogo} alt="TrueBlue IT Services Logo" />
                <p>TrueBlue IT Services</p>
              </div>
              <div className="sponsor-item">
                <img src={dihLogo} alt="Darwin Innovation Hub Logo" />
                <p>Darwin Innovation Hub</p>
              </div>
              <div className="sponsor-item">
                <img src={codeUpNTLogo} alt="CodeUp NT Logo" />
                <p>CodeUp NT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="acknowledgment">
          <p>
            Black Rose acknowledges Traditional Owners of Country throughout Australia and recognises the continuing connection to lands, waters and communities. We pay our respects to Aboriginal and Torres Strait Islanders cultures and to elders past and present.
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Black Rose Group.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
