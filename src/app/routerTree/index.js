import fileObject from "../../files";
import React from "react";
import { CreateMarkDown } from "../../components/markdown";
// import * as fs from 'fs-web';

const path = require('path')
// const fs = require("fs")


const files = fileObject.docs;

const createMarkdown = content => {
  return <CreateMarkDown content={content}/>
};

function treeMap(root) {
  const absolutePath = path.join(__dirname, root.dirname);
  console.log(absolutePath);
//  const content = await fs.readFile(absolutePath);
//   const element = createMarkdown(content);
  const mappedRoot = {
    path: root.path,
    element:'',
    children: [],
  };
  const newChildren = [];
  for (const child of root.children) {
    const newChild = treeMap(child);
    newChildren(newChild);
  }
  return mappedRoot;
}

const routerTree = treeMap(files);
console.log(routerTree);
export default routerTree;
