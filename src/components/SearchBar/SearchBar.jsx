import css from "./SearchBar.module.css";
import { IoSearchSharp } from "react-icons/io5";
export default function SearchBar({ onSubmit }) {
  const handleSearch = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const input = form.elements.query.value;
    // if (input.trim() === "") {
    //   alert("Please enter search term");
    //   return;
    // }
    onSubmit(input);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSearch} className={css.searchBar}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          {" "}
          <IoSearchSharp size={"22px"} />
        </button>
      </form>
    </header>
  );
}
