import useProducts from "../hooks/useProducts";
const Products = (): JSX.Element => {
  const { data, loading, error } = useProducts();
  console.log("desde hook --> ", data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something wrong...</div>;
  }

  return (
    <>
      <h1>List of Products</h1>
      {data &&
        data.map((p) => (
          <article key={p.id} aria-label={p.title}>
            <img
              src={p.images[0]}
              alt={p.title}
              style={{ width: "300px", height: "300px", objectFit: "contain", display: "block" }}
            />
            <footer>
              <span>{p.title}</span>
            </footer>
          </article>
        ))}
    </>
  );
};

export default Products;
