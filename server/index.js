import http from "http";
import { html } from "htm/preact";
import staticServer from "./static-server";
import navigation from "../src/navbar/Navbar";
import homepage from "../src/homepage/Homepage";
import trashpage from "../src/trashPage/TrashPage";
import testingpage from "../src/component-testing/ComponentTesting";
import renderToString from "preact-render-to-string";
import template from "./template";

const SERVER_PORT = 3000;

function render() {
  const nav = renderToString(html`<${navigation} />`);
  const home = renderToString(html`<${homepage} />`);
  const trash = renderToString(html`<${trashpage} />`);
  const testing = renderToString(html`<${testingpage} />`);

  return template({
    navbar: nav,
    homepage: home,
    trash: trash,
    testing: testing,
  });
}

const app = (req, res) => {
  if (
    req.url.endsWith(".js") ||
    req.url.endsWith(".jsx") ||
    req.url.endsWith(".map") ||
    req.url.endsWith(".css")
  ) {
    staticServer(req, res);
  } else {
    res.write(`${render()}`);
    res.end();
  }
};

const server = http.createServer(app);

server.on("error", (err) => console.error(err));

server.listen(SERVER_PORT, () => {
  console.log("http server started at ", "http://localhost/" + SERVER_PORT);
});
