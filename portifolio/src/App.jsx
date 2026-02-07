import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Skills from './pages/Skills'; 
import Projects from './pages/Projects'; 
import Contact from './pages/Contact'; 
import Blog from './pages/Blog'; 
import Resume from './pages/Resume'; 

function App() {

  return (
    <BrowserRouter>
      <Header /> 

      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/aboutme" element={<About />} /> 
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/resume" element={<Resume />} /> 
        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;