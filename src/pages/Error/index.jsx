import { useEffect } from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/404", { replace: true });
  }, []);

  return (
    <div className="error-page">
      <h1>404 Error Page</h1>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
          <a href="/#/home" className="more-link">
            Go to home
          </a>
      </div>
    </div>
  );
}
