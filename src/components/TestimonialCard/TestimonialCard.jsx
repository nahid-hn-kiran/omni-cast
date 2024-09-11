import "./TestimonialCard.css";
import John from "../../assets/images/john.png";
import { IoStar } from "react-icons/io5";
import { FaQuoteLeft, FaRegStarHalfStroke } from "react-icons/fa6";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content text-center flex flex-col items-center">
        <p className="flex gap-x-1">
          <span>
            <FaQuoteLeft />
          </span>
          Maecenas non ante sit amet ex scelerisque facilisis. Sed at orci
          maximus, suscipit nunc, elementum arcu. the Fusce in aliquet purus.
        </p>
        <div className="testimonial-footer mt-5">
          <img src={John} alt="John" />
          <h3 className="testimonial-title mt-1.5">Mr John Smith</h3>
          <h4 className="job mt-1.5">Ceo of Omni-It</h4>
          <p className="flex gap-x-1.5 mt-1.5">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <FaRegStarHalfStroke />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
