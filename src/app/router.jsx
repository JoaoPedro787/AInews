import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./routes/index/index.jsx";
import Layout from "../components/layouts/layout.jsx";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
