import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

//we will be using prsim light cuz perviousone is ehay and for all type of lanaguage in light we can specify lnaguage
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

//now registe it;

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);
// content: "# Next JS is a React Framework of React", this is a markdown sytax which is used ti write read me file in github so we will transalte this into jsx
// const Dummy_Posts = {
//   slug: "getting-started-with-nextjs",
//   title: "getting started with nextjs",
//   image: "getting-started-nextjs.png",
//   content: "# Next JS is a React Framework of React",
//   date: "2022-02-10",
// };

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  //![Create routes via your file + folder structure](nextjs-file-based-routing.png) in function down image is targetting this markdown which itself have alt text(Create routes via your file + folder structure) which can be access by image.alt and image path(nextjs-file-based-routing.png) can be access by image.src but we need full path so we need to built
  /*
  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };
*/

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
              priority={true}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
// /**
//  *
//  * <ReactMarkdown>{post.content}</ReactMarkdown> always return image component with <img> tag but in next for optimization we use <image> tag so how to tell markdown to correct is well you need to set renderers attr on <ReactMarkdown>
//  *
//  * Change renderers to components
// react-markdown used to let you define components for markdown constructs (link, delete, break, etc). This proved complex as users didn’t know about those names or markdown peculiarities (such as that there are fully formed links and link references).
//  */
// export default PostContent;

// import PostHeader from "./post-header";
// import classes from "./post-content.module.css";
// import ReactMarkdown from "react-markdown";
// import Image from "next/image";
// import { prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// // import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// // import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// // content: "# Next JS is a React Framework of React", this is a markdown sytax which is used ti write read me file in github so we will transalte this into jsx
// // const Dummy_Posts = {
// //   slug: "getting-started-with-nextjs",
// //   title: "getting started with nextjs",
// //   image: "getting-started-nextjs.png",
// //   content: "# Next JS is a React Framework of React",
// //   date: "2022-02-10",
// // };

// const PostContent = (props) => {
//   const { post } = props;

//   const imagePath = `/images/posts/${post.slug}/${post.image}`;

//   //![Create routes via your file + folder structure](nextjs-file-based-routing.png) in function down image is targetting this markdown which itself have alt text(Create routes via your file + folder structure) which can be access by image.alt and image path(nextjs-file-based-routing.png) can be access by image.src but we need full path so we need to built
//   /*
//   const customRenderers = {
//     // image(image) {
//     //   return (
//     //     <Image
//     //       src={`images/posts/${post.slug}/${image.src}`}
//     //       alt={image.alt}
//     //       width={600}
//     //       height={300}
//     //     />
//     //   );
//     // },
//     paragraph(paragraph) {
//       const { node } = paragraph;

//       if (node.children[0].type === "image") {
//         const image = node.children[0];
//         return (
//           <div className={classes.image}>
//             <Image
//               src={`images/posts/${post.slug}/${image.url}`}
//               alt={image.alt}
//               width={600}
//               height={300}
//             />
//           </div>
//         );
//       }

//       return <p>{paragraph.children}</p>;
//     },
//   };
// */

//   const customRenderers = {
//     p(paragraph) {
//       const { node } = paragraph;

//       if (node.children[0].tagName === "img") {
//         const image = node.children[0];

//         return (
//           <div className={classes.image}>
//             <Image
//               src={`/images/posts/${post.slug}/${image.properties.src}`}
//               alt={image.properties.alt}
//               width={600}
//               height={300}
//               priority={true}
//             />
//           </div>
//         );
//       }

//       return <p>{paragraph.children}</p>;
//     },
//     code(code) {
//       const { language, value } = code;
//       return (
//         <SyntaxHighlighter
//           style={atomDark}
//           language={language}
//           children={value}
//         />
//       );
//     },
//   };
//   return (
//     <article className={classes.content}>
//       <PostHeader title={post.title} image={imagePath} />
//       <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
//     </article>
//   );
// };

// /**
//  *
//  * <ReactMarkdown>{post.content}</ReactMarkdown> always return image component with <img> tag but in next for optimization we use <image> tag so how to tell markdown to correct is well you need to set renderers attr on <ReactMarkdown>
//  *
//  * Change renderers to components
// react-markdown used to let you define components for markdown constructs (link, delete, break, etc). This proved complex as users didn’t know about those names or markdown peculiarities (such as that there are fully formed links and link references).
//  */
// export default PostContent;
