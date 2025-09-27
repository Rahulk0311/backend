// Get references to the editor and preview elements from the HTML
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Set some default Markdown text to show how it works
const defaultText = `
# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return 'It works!';
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

There's also [links](https://www.google.com), and
> Block Quotes!

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
`;

// Function to update the preview panel
function updatePreview() {
    // Get the text from the editor
    const markdownText = editor.value;
    // Convert the Markdown text to HTML using the marked library
    const htmlText = marked.parse(markdownText);
    // Set the innerHTML of the preview div to the converted text
    preview.innerHTML = htmlText;
}

// Add an event listener that calls updatePreview whenever the user types
editor.addEventListener('input', updatePreview);

// Set the initial value of the editor and run the preview function once on load
editor.value = defaultText;
updatePreview();