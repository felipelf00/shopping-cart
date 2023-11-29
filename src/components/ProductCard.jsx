import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`${product.id}`}>
        <img src={product.image} />
      </Link>
      <div className="card-text">
        <div className="card-title">{product.title}</div>
        <div>$ {product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
