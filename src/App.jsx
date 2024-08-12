import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Cal from "./components/Cal";
import  Faq  from "./components/Faq";
import CustomerReview from "./components/CustomerReview";
import Form from "./components/Form";
import Simililar from "./components/Simililar";
import Footer from "./components/Footer";
const App = () => {
  return (
      <div>
        <Navbar />
        <Hero />
        {/* <MobileNav/> */}
        <Cal/>
        <Faq/>
        <CustomerReview/>
        <Form/>
        <Simililar/>
        <Footer/>
      </div>
  );
};

export default App;
