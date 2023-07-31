import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";
// const Dummy_Posts = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "getting started with nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Next JS is a React Framework which makes the use of React easy and used for building fullstack applications",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "getting started with nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Next JS is a React Framework which makes the use of React easy and used for building fullstack applications",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "getting started with nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Next JS is a React Framework which makes the use of React easy and used for building fullstack applications",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "getting started with nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Next JS is a React Framework which makes the use of React easy and used for building fullstack applications",
//     date: "2022-02-10",
//   },
// ];

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of programming related posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
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
