import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthPage from "../pages/Auth";
import ProductDetails from "../pages/Product-details"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/:type" element={<AuthPage />} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
