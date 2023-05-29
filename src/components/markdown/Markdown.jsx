import React from "react";
import convertMarkdownToHTML from "../../app/markdown/markdown";
const parse = require("html-react-parser");


const Markdown = ({ markdownText, key, id }) => {
  const convertedHTML = convertMarkdownToHTML(markdownText);
  return <div key = {key} id={id}>{parse(convertedHTML)}</div>;
};

export default Markdown;
