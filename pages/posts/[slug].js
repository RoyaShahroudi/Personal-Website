import PostDetail from "../../components/posts/PostDetail";
import Layout from "../../components/layout/Layout";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = ({ post }) => {
  return (
    <Layout>
      <PostDetail post={post} />
    </Layout>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
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
    fallback: true,
  };
}

export default PostDetailPage;
