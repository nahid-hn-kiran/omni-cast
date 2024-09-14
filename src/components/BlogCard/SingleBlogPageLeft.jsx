import singleBlog from "../../assets/images/single-blog.png";

const SingleBlogPageLeft = () => {
  return (
    <div className="single-blog-top">
      <div className="single-blog-thumbnail">
        <img src={singleBlog} alt="SingleBlog" />
      </div>
      <div className="blog-meta-top p-4">
        <div className="single-blog-meta w-8/12">
          <h2 className="single-blog-title">
            OmniCast is the great platform of PODCAST world!
          </h2>
          <div className="flex gap-x-8 mt-3">
            <p className="common-text">5 min read</p>
            <p className="common-text">Date : 12 March 2023</p>
          </div>
        </div>
      </div>
      <div className="blog-texts px-7 py-3">
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          consequuntur accusamus nisi impedit, sint assumenda deleniti qui et
          quo debitis dolor. Voluptas, autem. Perferendis, beatae. Non debitis
          velit perferendis nihil! Veniam eligendi, doloremque eum aliquam
          explicabo vel suscipit nam ad necessitatibus ullam. Modi quibusdam
          error, ratione voluptas ab necessitatibus accusamus.
        </p>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          consequuntur accusamus nisi impedit, sint assumenda deleniti qui et
          quo debitis dolor. Voluptas, autem. Perferendis, beatae. Non debitis
          velit perferendis nihil! Veniam eligendi, doloremque eum aliquam
          explicabo vel suscipit nam ad necessitatibus ullam. Modi quibusdam
          error, ratione voluptas ab necessitatibus accusamus.
        </p>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          consequuntur accusamus nisi impedit, sint assumenda deleniti qui et
          quo debitis dolor. Voluptas, autem. Perferendis, beatae. Non debitis
          velit perferendis nihil! Veniam eligendi, doloremque eum aliquam
          explicabo vel suscipit nam ad necessitatibus ullam. Modi quibusdam
          error, ratione voluptas ab necessitatibus accusamus.
        </p>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          consequuntur accusamus nisi impedit, sint assumenda deleniti qui et
          quo debitis dolor. Voluptas, autem. Perferendis, beatae. Non debitis
          velit perferendis nihil! Veniam eligendi, doloremque eum aliquam
          explicabo vel suscipit nam ad necessitatibus ullam. Modi quibusdam
          error, ratione voluptas ab necessitatibus accusamus.
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPageLeft;
