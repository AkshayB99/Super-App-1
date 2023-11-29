import Registration from "./pages/registration/Registration.jsx";
import Entertainment from "./pages/category/Entertainment.jsx";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/select" element={<Entertainment />} />
      </Routes>
    </>
  );
};

export default App;