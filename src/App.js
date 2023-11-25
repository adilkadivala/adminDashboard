import React from "react";
import MainAr from "./routes/admin/MainAr";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainAr />
      </BrowserRouter>
    </>
  );
};

export default App;
