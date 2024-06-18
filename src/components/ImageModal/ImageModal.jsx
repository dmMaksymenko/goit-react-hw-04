import Modal from "react-modal";
import css from "./ImageModal.module.css";
export default function ImageModal({ isOpen, onRequestClose, imageData }) {
  if (!imageData) return null;
  const {
    alt_description,
    urls: { regular },
  } = imageData;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.box}>
        <img className={css.img} alt={alt_description} src={regular} />
      </div>
    </Modal>
  );
}
