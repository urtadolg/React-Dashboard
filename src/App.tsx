import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faHome,
  faFolder,
  faUsers,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header/Header";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";

library.add(faShoppingCart, faHome, faFolder, faUsers, faAddressBook);

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<p>test</p>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Fragment>
  );
}

export default App;
