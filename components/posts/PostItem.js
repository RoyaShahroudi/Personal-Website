import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const postItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const router = useRouter();

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  // const imagePath = `/${router.locale === "fa"? "fa" : ""}/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  // const linkPath = `/${router.locale === "fa"? "fa" : ""}/posts/${slug}`;

  return (
    <div className="bg-white rounded-xl relative hover:shadow-lg">
      <Link href={linkPath}>
        <a>
          <div>
            <Image
              src={imagePath}
              alt={title}
              width={200}
              height={100}
              layout="responsive"
              className="rounded-t-xl"
            />
          </div>
          <div className="bg-primary -mt-6 z-10 w-100 absolute left-0 py-2 px-4 rounded-r-full text-white">
            <h3 className="text-lg font-bold line-clamp-1">
              {title}
            </h3>
          </div>
          <div className="px-4 pt-10 pb-4">
            <p className="text-gray-800">{excerpt}</p>
            <div className="pt-2">
              <time className="text-gray-500 text-xs">
                {formattedDate}
              </time>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default postItem;
