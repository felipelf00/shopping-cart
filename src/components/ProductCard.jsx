import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <Link to={`${product.id}`}>
        <img src={product.image} />
        <div>{product.title}</div>
        <div>R$ {product.price}</div>
      </Link>
    </div>
  );
}

export default ProductCard;
