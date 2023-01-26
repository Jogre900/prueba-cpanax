import { useState, useEffect } from "react";
import { FaRegWindowMaximize, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Product } from "../../../domain/product.model";
import ProductCard from "../productCard/productCard";
import "./styles.css";

type ProductCatalogProps = {
  data: any[] | null;
};

const ProductCatalog = ({ data }: ProductCatalogProps): JSX.Element => {
  const [filtered, setFiltered] = useState<any[]>();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const [size, setSize] = useState("3");
  const [pages, setPages] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  console.log("limit+----", limit);
  console.log("pages---", pages);
  console.log("count----", pagesCount);

  useEffect(() => {
    if (data) {
      console.log(data.length);
      const test = data?.slice(offset, limit);
      console.log(test);
      setFiltered(test);
    }
  }, [data, limit, offset, size]);

  useEffect(() => {
    if (data) {
      let limitbysize = size === "3" ? 12 : 18;
      setPagesCount(Math.ceil(data.length / limitbysize));
    }
  }, [data, size]);

  return (
    <div className="grid gap-1">
      <div className="col-12">
        <FaRegWindowMaximize
          onClick={() => {
            setSize(size === "3" ? "2" : "3");
            setLimit(size === "3" ? 12 : 18);
          }}
          color="#09f"
        />
      </div>
      {filtered && filtered.map((p: Product) => <ProductCard key={p.id} item={p} className={`col-${size}`} />)}
      <div className="col-12 flex justify-content-center">
        <button
          className="flex align-items-center pag-btn"
          onClick={() => {
            setOffset((prev) => prev - 12);
            setLimit(limit / 2);
            setPages(pages - 1);
          }}
          disabled={offset === 0}
          style={{
            backgroundColor: "#fff",
            border: "none",
          }}
        >
          <FaChevronLeft />
          Prev
        </button>

        <button
          className="flex align-items-center pag-btn"
          onClick={() => {
            setOffset(limit);
            setLimit(limit * 2);
            setPages(pages + 1);
          }}
          disabled={pages === pagesCount}
        >
          Next
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductCatalog;
