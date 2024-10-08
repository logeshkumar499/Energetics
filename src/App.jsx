import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import CustomLoader from "./components/Loader";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import { Flip, ToastContainer } from "react-toastify";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Layout>
        <ToastContainer
          transition={Flip}
          position="top-center"
          autoClose={5000}
          theme="light"
          limit={1}
        />
        <Suspense fallback={<CustomLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
