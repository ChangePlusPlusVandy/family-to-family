import SquareLoader from "react-spinners/SquareLoader";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <SquareLoader
        color="#0198BA"
        // loading={loading}
        size={50}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
