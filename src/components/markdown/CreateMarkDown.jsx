import React from "react";
import Markdown from "./Markdown";

const CreateMarkDown = ({content}) => {
    return (
        <Markdown markdownText={content}/>
    )
}

export default CreateMarkDown;