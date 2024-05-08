import Home from "./Dashboard/Home";

import Documents from "./Pages/Documents";
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<Documents />} />
      </Routes>
    </>
  );
}

export default App;
