import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import User from "./User";

const SlackRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </Router>
);

export default SlackRoutes;
