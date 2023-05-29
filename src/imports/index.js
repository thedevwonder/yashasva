import { CreateMarkDown, Markdown } from '../components/markdown';
import home from '../docs/home/home.md';
import deepclonegraph from '../docs/posts/deepclone-graph.md';
import React from 'react';

const posts = [
    deepclonegraph
];

export const CreateHome = () => {
    return (
        <Markdown key="home" markdownText={home} />
    )
}

export const CreatePosts = () => {
   const Posts = posts.map( (post, index) => {
    return (
        <div key={index}>
            <Markdown key={"post-"+index} markdownText={post}/>
        </div>
    )
   })
   console.log(Posts)
   return (
    <>
        {Posts}
    </>
   )
}
