import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
