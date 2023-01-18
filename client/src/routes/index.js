import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";

const SlackRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </Router>
);

export default SlackRoutes;
