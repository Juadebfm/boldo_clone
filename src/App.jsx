import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import BlogPost from "./pages/BlogPost";
import { BlogProvider } from "./context/blogContext";

const App = () => {
  return (
    <div className="bg-boldo_blue">
      <Router>
        <BlogProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </BlogProvider>
      </Router>
    </div>
  );
};

export default App;
