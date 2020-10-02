import React from "react";
import Header from "./Header";
import Baner from "./Baner";
import Features from "./Features";
import Extensions from "./Extensions";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className='container'>
      <Header />
      <Baner />
      <Features />
      <Extensions />
      <FAQ />
      <Newsletter/>
      <Footer />
    </div>
  );
}

export default HomePage;
