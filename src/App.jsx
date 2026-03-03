import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



import './App.css'
import GoToTop from './components/GoToTop';


function App() {
  return (
    <div className="bg-black text-emerald-400 text-4xl p-10">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default App
