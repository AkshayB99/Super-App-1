import Registration from "./pages/registration/Registration.jsx";
import Entertainment from "./pages/category/Entertainment.jsx";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/select" element={<Entertainment />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
