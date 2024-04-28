import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts"

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Contacts/>
      <Footer />
    </>
  );
}

export default Home;
