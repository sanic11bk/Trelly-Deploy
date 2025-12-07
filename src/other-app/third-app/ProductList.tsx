import { ProductItem } from "./ProductItem";
import type { Product } from "./Type";

type ProductList = {
  products: Array<Product>;
};

export const ProductList = ({ products }: ProductList) => {
  console.log('📋 ProductList')
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '700px', gap: '20px'}}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};
