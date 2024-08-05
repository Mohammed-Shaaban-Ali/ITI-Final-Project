import "./HomeBanner.css";
import logos from "../../../assets/Logos.svg";
export default function HomeBanner() {
  return (
    <div className="banner">
      <div className="contant">
        <h4>
          Over <span>32K+</span> fashion gurus are growing their brands with
          FashionForAll.
        </h4>
        <img src={logos} alt="logos" />
      </div>
    </div>
  );
}
