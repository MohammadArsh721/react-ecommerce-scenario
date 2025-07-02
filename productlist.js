import React from 'react';
import ProductCard from './ProductCard';

const allProducts = [
  { id: 1, name: 'T-Shirt', price: 799 },
  { id: 2, name: 'Shoes', price: 1499 },
  { id: 3, name: 'Bag', price: 999 },
];

function ProductList({ search }) {
  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {filtered.map(p => (
        <ProductCard key={p.id} name={p.name} price={p.price} />
      ))}
    </div>
  );
}

export default ProductList;
