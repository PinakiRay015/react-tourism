import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
const App = () => {
  return (
      <div>
        <Navbar />
        <Hero />
        <MobileNav/>
      </div>
  );
};

export default App;
