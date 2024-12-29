import React from "react";
import {Routes, Route  } from "react-router-dom";
import Main from "../../pages/admin/Main";

const MainAr = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Main />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default MainAr;


