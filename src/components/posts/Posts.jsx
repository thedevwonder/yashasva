import { Markdown } from "../markdown";
import React from "react";
import { posts } from "../../imports";

const TableOfContents = () => {
  return (
    <div className="table-of-content" id="blogs">
        <h2>Blogs</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}><a href={"#"+post.id}>{post.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

const CreatePosts = () => {
  const Posts = posts.map((post, index) => {
    return (
      <div key={index}>
        <Markdown id={post.id} markdownText={post.content} />
      </div>
    );
  });
  return (
    <>
      <TableOfContents />
      {Posts}
    </>
  );
};

export default CreatePosts;
