import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<p>test</p>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

export default App;
