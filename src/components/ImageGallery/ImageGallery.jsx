import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          onClick={() => {
            onImageClick(image);
          }}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
