import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
