import Layout from "../../components/layout/Layout";
import Title from "../../components/layout/Title";
import PostDetail from "../../components/posts/PostDetail";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const PostDetailPage = ({ post }) => {
  return (
    <Layout>
    <Title
        title={post.title}
        description={post.excerpt}
      />
      <PostDetail post={post} />
    </Layout>
  );
};

export const getStaticProps = async ({ params, locale }) => {
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["mainNavbar"])),
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default PostDetailPage;
