import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";

import styles from "../../styles/PostDetail.module.css";

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('jsx', jsx);

const PostDetail = (props) => {
  const { slug, title, image, date, content } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className="image">
            <Image
              src={`/images/posts/${slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    },
  };

  return (
    <article className="bg-gray-100 py-12 min-h-cal">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="h-80 w-fill relative">
            <Image
              src={imagePath}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="px-5 pb-5 md:px-10">
            <div>
              <h1 className="py-7 text-center text-primary font-bold text-2xl">
                {title}
              </h1>
            </div>
            <div className={styles.content}>
              <ReactMarkdown renderers={customRenderers}>
                {content}
              </ReactMarkdown>
            </div>
            <div className="text-sm text-gray-500 pt-6">{formattedDate}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
