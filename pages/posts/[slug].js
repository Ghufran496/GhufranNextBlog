//[slug] is basically human readable sentence like getting-started-with-nextjs. instead of using [id].js whihc would be fine here but always use human readable things so thats why we are naming it as slug
import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

const PostDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
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

// export function getStaticPaths() {
//   return {
//     paths: [{params: {slug: }}],
//   };
// } that how it works usually but here

export function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailsPage;
