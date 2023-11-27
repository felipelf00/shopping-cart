import { useParams } from "react-router-dom";

function Product({ products }) {
  console.log("products ");
  console.log(products);
  const { id } = useParams();

  if (!products) return <h4>loading...</h4>;

  const index = products.findIndex((product) => product.id === Number(id));
  console.log("index ");
  console.log(index);
  return (
    <>
      <h4>This is the page for the product {products[index].title}</h4>
      {/* <h4>This is the page for the product of id {id}</h4> */}
    </>
  );
}

export default Product;
