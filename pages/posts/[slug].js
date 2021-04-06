import Layout from "../../components/layout/Layout";
import Title from "../../components/layout/Title";
import PostDetail from "../../components/posts/PostDetail";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

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
