import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthPage from "../pages/Auth";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/:type" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
