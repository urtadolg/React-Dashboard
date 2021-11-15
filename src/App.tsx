import { Fragment, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faHome,
  faFolder,
  faUsers,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Employees from "./pages/employees/Employees";
import NewEmployee from "./pages/employees/NewEmployee";

library.add(faShoppingCart, faHome, faFolder, faUsers, faAddressBook);

function App() {
  useEffect(() => {
    const loadingData = async () => {
      const response = await fetch(
        "https://dashboard-store-86edf-default-rtdb.firebaseio.com/employees.json"
      );

      if (!response.ok) {
        throw new Error("Unable to load data");
      }

      const data = await response.json();

      console.log(data);
    };

    loadingData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/new" element={<NewEmployee />} />
      </Routes>
    </Fragment>
  );
}

export default App;
