import "./WhatWeDo.css";
import bander from "../../../assets/Banner.svg";
import What from "../../../assets/what1.png";
import What2 from "../../../assets/what2.png";
import What3 from "../../../assets/what3.png";
import What4 from "../../../assets/what4.png";
import Rectangle from "../../../assets/Rectangle 163.png";
export default function WhatWeDo() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container-bander ">
        <img src={bander} alt=" bander " />
      </div>
      <h1 className="title ">What we do </h1>
      <div className="circle ">
        <img
          data-aos="zoom-in-right"
          data-aos-delay="1400"
          src={Rectangle}
          alt="Rectangle"
        />
        <div className="whatWeDo ">
          <div className="card1">
            <div className="card-what ">
              <img src={What} alt="What" />
              <div className="card-text">
                <h3>Shop for latest wears</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. <br />
                  Quam libero viverra faucibus condimentum.
                </p>
              </div>
            </div>
            <div className="card-what ">
              <img src={What2} alt="What" />
              <div className="card-text">
                <h3>Request for mesurment for a style</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. <br />
                  Quam libero viverra faucibus condimentum.
                </p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="card-what">
              <img src={What3} alt="What" />
              <div className="card-text">
                <h3>Sell yours wears</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur.
                  <br /> Quam libero viverra faucibus condimentum.
                </p>
              </div>
            </div>
            <div className="card-what">
              <img src={What4} alt="What" />
              <div className="card-text">
                <h3>Get your wears delivered to you</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. <br />
                  Quam libero viverra faucibus condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="zoom-in-left"
          data-aos-delay="1400"
          src={Rectangle}
          alt="Rectangle"
        />
      </div>
    </div>
  );
}
