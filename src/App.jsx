import Registration from "./pages/Registration/Registration.jsx";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;