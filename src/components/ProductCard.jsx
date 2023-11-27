function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} />
      <div>{product.title}</div>
      <div>R$ {product.price}</div>
    </div>
  );
}

export default ProductCard;
