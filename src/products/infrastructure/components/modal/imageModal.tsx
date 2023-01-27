import Modal from "react-modal";
import "./styles.css";
type ImageModalProps = {
  images: any[];
  isOpen: boolean;
  onRequestClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
};

const customStyles = {
  // content: {

  // },
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ images, isOpen, onRequestClose }: ImageModalProps): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div className="gallery">
        {images.map((i) => {
          return <img key={i} src={i} alt={i} className="img" />;
        })}
      </div>
    </Modal>
  );
};

export default ImageModal;
