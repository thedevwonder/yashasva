import React from "react";
import convertMarkdownToHTML from "../../app/markdown/markdown";
const parse = require("html-react-parser");


const Markdown = ({ markdownText, key }) => {
  const convertedHTML = convertMarkdownToHTML(markdownText);
  return <div key = {key}>{parse(convertedHTML)}</div>;
};

export default Markdown;
