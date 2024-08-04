import React from "react";
import "./Testimonies.css"; // Import the CSS file

const testimonialsData = [
  {
    id: 1,
    quote:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 2,
    quote:
      "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
    name: "Leland Kiehn",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 3,
    quote:
      "The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone looking for quality gear.",
    name: "Peter Renolds",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="section-container section-container-sm">
      <div className="inner-container inner-container-sm inner-container-lg">
        <div className="inner-container text-center">
          <h2 className="heading heading-sm animation">
            What people all over the world are saying about us
          </h2>
        </div>
        <ul className="list-container list-container-sm list-container-lg">
          {testimonialsData.map(({ id, quote, name, image }) => (
            <li key={id}>
              <ul className="flex-col flex-col-sm">
                {" "}
                <li className="animation">
                  <figure className="figure">
                    <blockquote className="quote">
                      <p>{quote}</p>
                    </blockquote>
                    <figcaption className="figcaption">
                      <div>
                        <div className="name">{name}</div>
                      </div>
                      <div className="image-container">
                        <img alt="alt" className="image" src={image} />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
