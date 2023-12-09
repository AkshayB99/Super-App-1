import Registration from "/src/pages/registration/Registration.jsx";
import Category from "./pages/category/SelectCategory.jsx";
import Home from "./pages/Home/Home.jsx";
import Entertainment from "./pages/entertainment/Entertainments.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/select" element={<Category />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
