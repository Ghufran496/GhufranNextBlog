import { Fragment } from "react";
import Hero from "@/components/home/hero";
import FeaturedPosts from "@/components/home/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

// import fs from "fs";
// import path from "path";

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

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Ghufran's Blog</title>
        <meta
          name="description"
          content="I post about programming and web developement"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
