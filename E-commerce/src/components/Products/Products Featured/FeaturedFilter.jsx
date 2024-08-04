import React from "react";

export default function FeaturedFilter({
  filters,
  handleFilterChange,
  handlePriceChange,
}) {
  return (
    <section className="filter animation">
      <h2 className="filter-title">Filter</h2>
      <div className="filter-section">
        {/* Gender Filter */}
        <div className="filter-group">
          <h3>Gender</h3>
          {Object.entries(filters.gender).map(([key, value]) => (
            <div key={key} className="filter-item">
              <input
                type="checkbox"
                id={`gender-${key}`}
                checked={value}
                onChange={() => handleFilterChange("gender", key)}
                className="Product-radio-input"
              />
              <label className="Product-radio-label" htmlFor={`gender-${key}`}>
                {key}
              </label>
            </div>
          ))}
        </div>

        {/* Age Group Filter */}
        <div className="filter-group">
          <h3>Age group</h3>
          {Object.entries(filters.ageGroup).map(([key, value]) => (
            <div key={key} className="filter-item">
              <input
                type="checkbox"
                id={`age-${key}`}
                checked={value}
                onChange={() => handleFilterChange("ageGroup", key)}
                className="Product-radio-input"
              />
              <label className="Product-radio-label" htmlFor={`age-${key}`}>
                {key}
              </label>
            </div>
          ))}
        </div>

        {/* Price Filter */}
        <div className="filter-group">
          <h3>Price</h3>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Min"
              value={filters.price.min}
              onChange={(e) => handlePriceChange("min", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.price.max}
              onChange={(e) => handlePriceChange("max", e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
