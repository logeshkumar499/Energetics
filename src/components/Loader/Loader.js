import { useEffect } from "react";
import "./load.css";
import loader from "./loading.svg";

export function LoaderContainer() {
  useEffect(() => {
    const head = document.getElementById("header");
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
    if (head) {
      head.style.position = "relative";
    }
    return () => {
      document.body.style.overflow = "auto";
      if (head) {
        head.style.position = "fixed";
      }
    };
  }, []);
  return <div id="LoaderContainer" />;
}
const Loader = () => {
  function Show() {
    const bg = document.createElement("div");
    bg.className = "load-screen load-fade-in";
    bg.id = "load-screen";
    bg.onclick = () => Hide();
    const image = document.createElement("img");
    image.src = loader;
    image.alt = "";
    bg.appendChild(image);
    // console.log(bg);
    getLoader().appendChild(bg);
  }

  const Hide = () => {
    const ref = document.getElementById("load-screen");
    if (ref) {
      getLoader().removeChild(ref ? ref : document.createElement("div"));
    }
  };
  const getLoader = () => {
    const reference = document.getElementById("LoaderContainer");
    // console.log("reference", reference,);
    return reference ? reference : <div />;
  };
  return { Show, Hide };
};
export default Loader;
