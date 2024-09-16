import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/Error";
import CustomLoader from "./components/Loader";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<CustomLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
