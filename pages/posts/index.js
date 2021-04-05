import AllPosts from "../../components/posts/AllPosts";
import Layout from "../../components/layout/Layout";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({posts}) => {
  return (
    <Layout>
      <AllPosts posts={posts} />
    </Layout>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
