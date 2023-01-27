import "./styles.css";
type PaginationProps = {
  totalElement: number;
  elementPerPage: number;
  changePage: (n: number) => void;
  className?: string | undefined;
};

const Pagination = ({ className, totalElement, elementPerPage, changePage }: PaginationProps): JSX.Element => {
  const pageNumber = [];
  for (let index = 1; index <= Math.ceil(totalElement / elementPerPage); index++) {
    pageNumber.push(+index);
  }
  return (
    <div className={className}>
      <ul className="flex">
        {pageNumber.map((n: number) => (
          <li key={n}>
            <button className="pagination-item" onClick={() => changePage(n)}>
              {n}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
