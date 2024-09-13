import { IoStar } from "react-icons/io5";
import "./Review.css";

const Review = () => {
  return (
    <div className="review p-6">
      <div className="flex justify-between">
        <h3 className="review-title">
          Leave a comment & <br /> rating
        </h3>
        <div className="rating">
          <p className="flex gap-x-1.5">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </p>
        </div>
      </div>
      {/* review Form */}
      <form className="pt-12 review-form">
        <div className="mt-7">
          <label htmlFor="review" name="review">
            Review
          </label>
          <textarea
            name="review"
            id="review"
            className="w-full h-36 mt-2"
          ></textarea>
        </div>
        <div className="mt-7 flex justify-between gap-x-7">
          <div className="w-full">
            <label htmlFor="name" id="name">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="h-12 mt-2 w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-12 mt-2 w-full"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree" className="ms-3">
            SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT TIME I
            COMMENT.
          </label>
        </div>
        <button
          type="submit"
          className="bg-omni-pink text-omni-white py-3 w-full mt-5"
        >
          Post Review
        </button>
      </form>
    </div>
  );
};

export default Review;
