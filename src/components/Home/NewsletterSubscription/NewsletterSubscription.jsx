import React from "react";
import "./NewsletterSubscription.css"; // Import the CSS file

const NewsletterSubscription = () => {
  return (
    <div className="newsletter-container ">
      <div className="svg-container animation">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="svg-full-width"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="content-container animation">
        <div className="content-wrapper">
          <h2 className="heading-new">Subscribe to our newsletter</h2>
          <p className="description-new">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo. Sed ut perspiciatis unde omnis.
          </p>
          <form className="form-subscribe">
            <input
              placeholder="Email"
              required
              type="text"
              className="input-email"
            />
            <a href="# " className="subscribe-button">
              Subscribe
            </a>
          </form>
          <p className="footer-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
          <a href="# " aria-label="Scroll down" className="scroll-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
