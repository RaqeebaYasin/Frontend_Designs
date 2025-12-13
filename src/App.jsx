// App.js (updated)
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact"; 
import CheckJob from "./CheckJob/CheckJob.jsx";
import ProtectionSteps from "./components/ProtectionSteps";
import ScamLandscape from "./components/ScamLandscape";
import RecentScamAlerts from "./components/RecentScamAlerts";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection id="home" />
            <Stats />
            <ProtectionSteps />
            <ScamLandscape/>
            <RecentScamAlerts/>
            <TestimonialsSection  />
            <CallToAction /> 
            <Footer/>
          </>
        } />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/checkjob" element={<CheckJob/>} />
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </>
  );
}

export default App;