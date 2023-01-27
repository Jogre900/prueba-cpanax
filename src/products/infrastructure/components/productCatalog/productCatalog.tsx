import { useState } from "react";
import type { Product } from "../../../domain/product.model";
import Pagination from "../pagination/pagination";
import ProductCard from "../productCard/productCard";
import "./styles.css";

type ProductCatalogProps = {
  data: any[] | null;
};

const ProductCatalog = ({ data }: ProductCatalogProps): JSX.Element => {
  const [size, setSize] = useState("3");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [elemPerPage] = useState<number>(12);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const lastElementIndex = currentPage * elemPerPage;
  const firstElementIndex = lastElementIndex - elemPerPage;
  let test = data?.slice(firstElementIndex, lastElementIndex);

  return (
    <div className="grid gap-1">
      <div className="col-12">
        <div className="flex">
          <button
            className="flex align-items-center  justify-content-start color-light fw-500 change-size-btn"
            onClick={() => {
              setSize(size === "3" ? "2" : "3");
            }}
          >
            <span>Change size</span>
          </button>
        </div>
      </div>

      <div
        className="grid gap-1 col-12"
        style={{
          height: "750px",
        }}
      >
        {test &&
          test.map((p: Product) => (
            <ProductCard key={p.id} item={p} className={`col-${size} flex justify-content-center`} />
          ))}
      </div>
      <div className="col-12 flex justify-content-center">
        <Pagination
          className="mt-3"
          elementPerPage={elemPerPage}
          totalElement={data ? data?.length : 0}
          changePage={changePage}
        />
      </div>
    </div>
  );
};

export default ProductCatalog;
