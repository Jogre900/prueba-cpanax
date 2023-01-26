import useProducts from "../hooks/useProducts";
import ProductCatalog from "../components/productCatalog/productCatalog";
import "./styles.css";

const Products = (): JSX.Element => {
  const { data, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something wrong...</div>;
  }

  return (
    <>
      <h1>List of Products</h1>

      <ProductCatalog data={data} />
    </>
  );
};

export default Products;
