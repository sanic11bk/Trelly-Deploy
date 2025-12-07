import { useState } from "react";
import type { Product } from "./Type";

export const ProductItem = ({ id, name, price, category }: Product) => {
  const [inCart, setInCart] = useState(false);

  const nameButton = inCart ? 'товар в корзине' : 'добавить в корзину';
  const alertMessage = inCart ? 'Товар удален из корзины' : 'Товар добавлен в корзину';

  const handleClick = () => {
    setInCart(prev => !prev);
    alert(alertMessage);
  };

  console.log('🧺 ProductItem')

  return (
    <div style={{ border: "4px solid black", width: "250px", padding: "20px" }}>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>price: {price}</p>
      <p>category: {category}</p>
      <button type="button" onClick={handleClick} style={{backgroundColor: inCart ? 'yellow' : 'white'}}>{nameButton}</button>
    </div>
  );
};
