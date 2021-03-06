import { h, render } from "preact";
import { lazy, Suspense } from "preact/compat";
import { html } from "htm/preact";
import Navigo from "navigo";
import Navbar from "./navbar/Navbar";
import Homepage from "./homepage/Homepage";

if (typeof window !== "undefined") {
  const TrashPage = lazy(() => import("./trashPage/TrashPage"));

  const router = new Navigo("/");

  render(html`<${Navbar} />`, document.getElementById("navbar"));

  render(html`<${Homepage} />`, document.getElementById("homepage"));

  const ComponentTesting = lazy(() =>
    import("./component-testing/ComponentTesting")
  );

  router
    .on("", () => {
      document.getElementById("trash").style.display = "none";
      document.getElementById("testing").style.display = "none";
      document.getElementById("homepage").style.display = "";
    })
    .resolve();

  router
    .on("trash", () => {
      document.getElementById("homepage").style.display = "none";
      document.getElementById("testing").style.display = "none";
      document.getElementById("trash").style.display = "";
      render(
        html`
    <${Suspense} fallback=${html`<div>loading outer...</div>`}>
      <${TrashPage} />
    </${Suspense}>`,
        document.getElementById("trash")
      );
    })
    .resolve();

  router
    .on("testing", () => {
      document.getElementById("homepage").style.display = "none";
      document.getElementById("trash").style.display = "none";
      document.getElementById("testing").style.display = "";
      render(
        html`
      <${Suspense} fallback=${html`<div>loading outer...</div>`}>
        <${ComponentTesting} />
      </${Suspense}>`,
        document.getElementById("testing")
      );
    })
    .resolve();

  document.querySelectorAll("a").forEach((e) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      router.navigate(e.pathname);
    });
  });
}
