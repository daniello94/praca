import React, { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";

/* components */
import Home from "./routers/Home";
import AdministrationPanel from "./routers/AdministrationPanel";
import MyProject from "./routers/MyProject";
import EditProject from "./routers/EditProject";

export default function App() {
  const [userData, setUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );
  axios.defaults.headers.common["x-auth-token"] = userData ? userData.jwt : "";

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userData={userData}
              setUser={setUser} />
          } />
        <Route
          path="/administrationPanel"
          element={
            <AdministrationPanel
              userData={userData}
              setUser={setUser} />
          } />
        <Route
          path="/myProject"
          element={
            <MyProject
              userData={userData}
              setUser={setUser} />
          } />

        <Route
          path="/editProject/:id"
          element={
            <EditProject />
          } />
      </Routes>
    </div>

  );

};
