import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListings);
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(() => {
      setListings((prev) => prev.filter((listing) => listing.id !== id));
    });
  }

  const listingCards = listings.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
      onDelete={handleDelete}
    />
  ));

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
