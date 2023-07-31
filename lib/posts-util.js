import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory); //return array of strings
}
// function getPostData(filename) {
//   const filePath = path.join(postsDirectory, filename);

//   const fileContent = fs.readFileSync(filePath, "utf-8");

//   //readFileSync return full content of file whihc is containng both meta data and markdown content so, to seprate it we install package npm install gray-matter.

//   const { data, content } = matter(fileContent);
//   const postSlug = filename.replace(/\.md$/, ""); //remove the file extension

//   const postData = {
//     slug: postSlug,
//     ...data,
//     content: content,
//   };

//   return postData;
// }

export function getPostData(pathIdentifier) {
  const postSlug = pathIdentifier.replace(/\.md$/, ""); //remove the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  //readFileSync return full content of file whihc is containng both meta data and markdown content so, to seprate it we install package npm install gray-matter.

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  // const postFiles = fs.readdirSync(postsDirectory); //return array of strings
  const postFiles = getPostFiles();
  //   for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  //   }

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.data ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
