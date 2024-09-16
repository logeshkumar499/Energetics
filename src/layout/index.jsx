import { Fragment } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let previousPath = "";

function Layout({ children }) {
  const location = useLocation();
  const { pathname, search } = location;
  const currentPath = pathname + search;
  if (currentPath !== previousPath) {
    window.scrollTo(0, 0);
  }
  setTimeout(() => {
    previousPath = currentPath;
  }, 300);

  useEffect(() => {
    const container = document.getElementById("page-scroller");
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.key]);

  return (
    <Fragment>
      <div className="view-container">
        {/* <Header /> */}
        <main id="page-scroller">{children}</main>
        
      </div>
    </Fragment>
  );
}

export default Layout;
