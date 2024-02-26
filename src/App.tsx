import React from "react";
import "./App.css";

import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { TopBooks } from "./layouts/HomePage/TopBooks";
import { Carousel } from "./layouts/HomePage/Components/Carousel";
import { Heros } from "./layouts/HomePage/Components/Heros";
import { LibraryServices } from "./layouts/HomePage/Components/LibraryServices";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
