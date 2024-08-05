import "./MainFooter.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbMessageCircleCancel } from "react-icons/tb";
import logo from "../../assets/logo.png";
const MainFooter = () => {
  return (
    <footer className="footer-section animation">
      <div className="container">
        <div className="grid-container">
          <div className="logo-section">
            <div className="logo">
              <div className="logo-icon">
                <img src={logo} alt="logo" />
              </div>
              <span className="logo-text">FashionForAll</span>
            </div>
            <p className="description">
              Your trusted partner in innovative solutions.
            </p>
            <a href="# " className="live-chat-button">
              <TbMessageCircleCancel className="chat-icon" />
              Live Chat
            </a>
          </div>
          <div className="links-section">
            <div className="links-column">
              <h3 className="links-title">Products</h3>
              <ul className="links-list">
                <li>
                  <a href="# " className="link-item">
                    Features
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <h3 className="links-title">Company</h3>
              <ul className="links-list">
                <li>
                  <a href="# " className="link-item">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <h3 className="links-title">Resources</h3>
              <ul className="links-list">
                <li>
                  <a href="# " className="link-item">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    eBooks
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <h3 className="links-title">Support</h3>
              <ul className="links-list">
                <li>
                  <a href="# " className="link-item">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Status
                  </a>
                </li>
                <li>
                  <a href="# " className="link-item">
                    Developer API
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="footer-bottom">
          <p className="copyright">&copy; Mohammed Shaaban.</p>
          <ul className="social-links">
            <li>
              <a href="# " className="social-link">
                <FaFacebook className="social-icon" />
              </a>
            </li>
            <li>
              <a href="# " className="social-link">
                <FaTwitter className="social-icon" />
              </a>
            </li>
            <li>
              <a href="# " className="social-link">
                <FaInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="# " className="social-link">
                <FaLinkedin className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
