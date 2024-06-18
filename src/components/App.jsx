import { useEffect, useState } from "react";
import css from "./App.module.css";
import { getImages } from "./image-api.js";
import ImageGallery from "../components/ImageGallery/ImageGallery.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Loader from "./Loader/Loader.jsx";
import Modal from "react-modal";
import ImageModal from "./ImageModal/ImageModal.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (searchQuery.trim() === "") return;
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data.results]);
        setTotalPages(data.total_pages);
        console.log(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchQuery, page]);

  const handleSearch = async (input) => {
    setSearchQuery(input);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onLoadMoreBtn={handleLoadMore} />
      )}
      {isLoading && <Loader />}

      <ImageModal
        imageData={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
}
