import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.jsx";
import Story from "./routes/story/story.jsx";
import Search from "./routes/search/search.jsx";
import Error from "./routes/errors/error.jsx";
import Layout from "../components/layouts/layout.jsx";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="/error/:errorID" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default AppRouter;
