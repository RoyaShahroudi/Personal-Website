import Layout from "../../components/layout/Layout";
import Title from "../../components/layout/Title";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <Layout>
      <Title
        title="Posts"
        description="I post about programming and web development."
      />
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
