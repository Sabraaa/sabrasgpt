import React from "react";
import "./App.css";
import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";
import Blog from "./containers/blog/Blog";
import Features from "./containers/features/Features";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Possiblity from "./containers/possibility/Possibility";
import Whatgpt from "./containers/whatgpt/Whatgpt";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
