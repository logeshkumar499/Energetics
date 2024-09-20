import { Fragment } from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const { pathname, search } = location;
  const currentPath = pathname + search;
  const previousPathRef = useRef("");

  useEffect(() => {
    const previousPath = previousPathRef.current;
    if (currentPath !== previousPath) {
      const container = document.getElementById("page-scroller");
      if (container) {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo(0, 0);
      }
      previousPathRef.current = currentPath;
    }
  }, [currentPath]);

  return (
    <Fragment>
      <main className="view-container" id="page-scroller">
        {children}
      </main>
    </Fragment>
  );
}

export default Layout;
