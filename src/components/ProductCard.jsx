import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

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

ProductCard.propTypes = {
  product: PropTypes.object,
}
export default ProductCard;