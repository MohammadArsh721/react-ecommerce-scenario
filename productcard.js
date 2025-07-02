import React, { useState } from 'react';

function ProductCard({ name, price }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={toggleLike}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
}

export default ProductCard;
