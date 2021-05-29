import fs from "fs";
let files = fs.readdirSync("build/dist/stylesheets");

export default ({ navbar, homepage, trash, testing }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Improved to do list created in React">
    <meta name="keywords" content="HTML, CSS, JavaScript, React">
    <meta name="author" content="Davor Jovanovic">
    <link rel="stylesheet" type="text/css" href="/index.css">
    ${files
      .map(
        (file) =>
          '<link rel="stylesheet" type="text/css" href="dist/stylesheets/' +
          file +
          '" />'
      )
      .join("")
      .slice(0, -1)}
    <link rel="shortcut icon" href="https://i.postimg.cc/cHq83Dy3/tab-icon.png">

    <title>To do app</title>
    </head>
    <body>
      <div id="navbar">${navbar}</div>
      <div id="homepage">${homepage}</div>
      <div id="trash" style="display: none">${trash}</div>
      <div id="testing" style="display: none">${testing}</div>
      <script type="module" src="/dist/index.js"></script>
    </body>
  </html>
`;
};
