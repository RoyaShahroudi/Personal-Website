import PostGrid from "./PostGrid";

const AllPosts = ({ posts }) => {
  return (
    <section className="bg-gray-100 pt-10 pb-10 min-h-cal">
      <div className="container">
        <div>
          <h2 className="text-center text-primary font-bold text-2xl pb-10">
            All Posts
          </h2>
        </div>
        <PostGrid posts={posts} />
      </div>
    </section>
  );
};

export default AllPosts;
