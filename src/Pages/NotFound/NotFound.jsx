import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="not-found pt-20">
      <div className="container">
        <button className="primary-btn" onClick={goBack}>
          Go Back
        </button>
        <div className="not-found-message my-4">
          <h2>Sorry! page not found.</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
