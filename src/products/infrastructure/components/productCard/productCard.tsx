import { useState } from "react";
import type { Product } from "../../../domain/product.model";
import ImageModal from "../modal/imageModal";
import "./styles.css";
type ProductCardProps = {
  item: Product;
  className?: string | undefined;
};

const ProductCard = ({ item, className }: ProductCardProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setOpenModal(true)} className={className}>
        <article aria-label={item.title} className="product-card">
          <img src={item.images[0]} alt={item.title} className="card-img" />
          <footer className="title-overlay">
            <div className="">
              <p className="title mv-0">{item.title}</p>
              <p className="subtitle mv-0 text-align-right"> {item.brand}</p>
            </div>
          </footer>
        </article>
      </div>
      {openModal && <ImageModal isOpen={openModal} onRequestClose={() => setOpenModal(false)} images={item.images} />}
    </>
  );
};

export default ProductCard;
