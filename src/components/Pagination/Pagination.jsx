import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Pagination.css";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="pagination flex gap-x-12">
      <Link to="/" className="pagination-item">
        <IoIosArrowBack />
      </Link>
      <Link to="/" className="pagination-item">
        1
      </Link>
      <Link to="/" className="pagination-item">
        2
      </Link>
      <Link to="/" className="pagination-item">
        3
      </Link>
      <Link to="/" className="pagination-item">
        4
      </Link>
      <Link to="/" className="pagination-item">
        5
      </Link>
      <Link to="/" className="pagination-item">
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export default Pagination;
