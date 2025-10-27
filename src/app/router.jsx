import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./routes/index/index.jsx";
import Stories from "./routes/stories/stories.jsx";
import Search from "./routes/search/search.jsx";
import Layout from "../components/layouts/layout.jsx";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
