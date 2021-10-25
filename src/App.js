import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Prices from "./components/Prices";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Prices />
      <Menu />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
