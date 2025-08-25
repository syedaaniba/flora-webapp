import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ServiceList from "./components/ServiceList";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <ServiceList />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
