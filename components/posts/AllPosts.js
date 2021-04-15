import PostGrid from "./PostGrid";

import { useTranslation } from "next-i18next";

const AllPosts = ({ posts }) => {
  
  const { t } = useTranslation("postsPage");

  return (
    <section className="bg-gray-100 pt-10 pb-10 grid place-content-center min-h-cal">
      <div className="container">
        <div>
          <h2 className="text-center text-primary font-bold text-2xl pb-10">
            {t("all-posts")}
          </h2>
        </div>
        <PostGrid posts={posts} />
      </div>
    </section>
  );
};

export default AllPosts;
