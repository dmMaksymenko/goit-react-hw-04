import css from "./Loader.module.css";
import { FallingLines } from "react-loader-spinner";
export default function Loader() {
  return (
    <FallingLines
      color="#4fa94d"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
      wrapperClass={css.loader}
    />
  );
}
