import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const { id, description, image, location } = listing;
  const [isFavorited, setIsFavorited] = useState(false);

  function handleFavoriteClick() {
    setIsFavorited((prev) => !prev);
  }

  function handleDeleteClick() {
    onDelete(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorited ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorited ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
