import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Contact from "./pages/Contact";

class App extends React.Component {
  render() {
    const navBar = "NavBar";
    return (
      <Router>
        <div>
          <NavBar navBar={navBar} />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/AboutUs' element={<Aboutus/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
          </Routes>
          <Hero />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;