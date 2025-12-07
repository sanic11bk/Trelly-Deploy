type ProductCardProps = {
  title: string;
  price: number;
  isAvailable: boolean;
  description: string;
}
 
export function ProductCard({ title, price, isAvailable, description }: Readonly<ProductCardProps> ) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Status: {isAvailable ? "In Stock" : "Out of Stock"}</p>
      <p>{description}</p>
    </div>
  )
}
 
<ProductCard
  title="Laptop"
  price={1200}
  isAvailable={true}
  description="High performance laptop"
/>