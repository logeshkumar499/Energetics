import { useEffect } from "react";
import "./load.css";
import loader from "./loading.gif";
function CustomLoader() {
  useEffect(() => {
    const head = document.getElementById("header");
    const pageScroll = document.getElementById("page-scroller");

    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "hidden";
    if (pageScroll) {
      pageScroll.style.overflowY = "hidden !important";
    }
    if (head) {
      head.style.position = "relative";
    }
    return () => {
      document.body.style.overflow = "auto";
      if (pageScroll) {
        pageScroll.style.overflowY = "auto";
      }
      if (head) {
        head.style.position = "fixed";
      }
    };
  }, []);
  return (
    <div className="load-screen load-fade-in">
      <img src={loader} alt="" />
    </div>
  );
}

export default CustomLoader;
