import { ProductList } from "./ProductList";

export const ThierdApp = () => {
  const products = [
    { id: 1, name: "Хлеб", price: 30, category: "Выпечка" },
    { id: 2, name: "Молоко", price: 60, category: "Молочные" },
    { id: 3, name: "Яблоки", price: 120, category: "Фрукты" },
  ];

  console.log('🔶 App')

  return <div>{<ProductList products={products}/>}</div>;
};
