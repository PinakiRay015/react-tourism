import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Cal from "./components/Cal";
import  Faq  from "./components/Faq";
import CustomerReview from "./components/CustomerReview";
const App = () => {
  return (
      <div>
        <Navbar />
        <Hero />
        <MobileNav/>
        <Cal/>
        <Faq/>
        <CustomerReview/>
      </div>
  );
};

export default App;
