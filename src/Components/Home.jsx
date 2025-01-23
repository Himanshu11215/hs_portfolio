import React from "react";

import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <>
      {/* <h1>This is Home Page.</h1> */}
      <About />
      <Services />
      <Portfolio />
      <ContactUs />
    </>
  );
}
