import { useState, useEffect } from "react";
import type { Product } from "../../domain/product.model";
import { fetchProducts } from "../api/api";

const useProducts = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((res) => {
        setLoading(false);
        setData(res.data.products);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return { data, loading, error };
};

export default useProducts;
