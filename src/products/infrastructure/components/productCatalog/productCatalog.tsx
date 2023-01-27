import { useState } from "react";
import { FaRegWindowMaximize } from "react-icons/fa";
import type { Product } from "../../../domain/product.model";
import ProductCard from "../productCard/productCard";
import "./styles.css";

type ProductCatalogProps = {
  data: any[] | null;
};
type PaginationProps = {
  totalElement: number;
  elementPerPage: number;
  changePage: (n: number) => void;
};

const Pagination = ({ totalElement, elementPerPage, changePage }: PaginationProps): JSX.Element => {
  const pageNumber = [];
  for (let index = 1; index <= Math.ceil(totalElement / elementPerPage); index++) {
    pageNumber.push(+index);
  }
  return (
    <div>
      <ul>
        {pageNumber.map((n: number) => (
          <li key={n}>
            <button onClick={() => changePage(n)}>{n}</button>
          </li>
        ))}
      </ul>
    </div>
  );
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
        <div>
          <FaRegWindowMaximize
            onClick={() => {
              setSize(size === "3" ? "2" : "3");
            }}
            color="#09f"
          />
        </div>
      </div>
      {test && test.map((p: Product) => <ProductCard key={p.id} item={p} className={`col-${size}`} />)}
      <div className="col-12 flex justify-content-center">
        <Pagination elementPerPage={elemPerPage} totalElement={data ? data?.length : 0} changePage={changePage} />
      </div>
    </div>
  );
};

export default ProductCatalog;
