import React from "react";
import "./App.css";
import Layout from "./screens/Layout";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Layout} />
    </div>
  );
}

export default App;
