import Showdown from "showdown";

const convertMarkdownToHTML = (text) => {
    const converter = new Showdown.Converter();
    converter.setFlavor('github')
    const html = converter.makeHtml(text)
    return html;
}

export default convertMarkdownToHTML;