import useProducts from "../hooks/useProducts";
import ProductCatalog from "../components/productCatalog/productCatalog";
import Heading from "../../../config/layout/heading/heading";
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
      <Heading className="mb-3" title="List of Products" />
      <ProductCatalog data={data} />
    </>
  );
};

export default Products;
