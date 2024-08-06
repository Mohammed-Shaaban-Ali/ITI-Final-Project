import "./LoadingProductCard.css";

export default function LoadingProductCard() {
  return (
    <div className="skeleton-cards">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div className="skeleton-card" key={item}>
          <div className="skeleton-card-header">
            <div className="skeleton-card-avatar"></div>
          </div>
          <div className="skeleton-card-content">
            <div className="skeleton-card-title"></div>
            <div className="skeleton-card-description">
              <div className="skeleton-card-line-group">
                <div className="skeleton-card-line"></div>
                <div className="skeleton-card-line"></div>
              </div>
              <div className="skeleton-card-line-group">
                <div className="skeleton-card-line"></div>
                <div className="skeleton-card-line"></div>
              </div>
            </div>
          </div>
          <hr />
          <div className="skeleton-card-buttons">
            <div className="skeleton-card-button"></div>
            <div className="skeleton-card-button"></div>
            <div className="skeleton-card-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
