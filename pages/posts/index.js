import Layout from "../../components/layout/Layout";
import Title from "../../components/layout/Title";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getStaticProps = async ({ locale }) => {
  const allPosts = getAllPosts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["mainNavbar", "postsPage"])),
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
