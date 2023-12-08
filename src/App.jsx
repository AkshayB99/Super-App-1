import Registration from "./pages/registration/Registration.jsx";
import Category from "./pages/category/SelectCategory.jsx";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Entertainments from "./pages/entertainment/Entertainments.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/select" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/entertainment" element={<Entertainments />} />
      </Routes>
    </>
  );
};

export default App;
