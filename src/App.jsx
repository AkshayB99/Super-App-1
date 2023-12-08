import Registration from "./pages/registration/Registration.jsx";
import Category from "./pages/category/SelectCategory.jsx";
import Home from "./pages/Home/Home.jsx";
import Entertainment from "./pages/entertainment/Entertainments.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/select" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </>
  );
};

export default App;
