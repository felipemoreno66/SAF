import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Login } from "./components/login";
import { Signup } from "./components/signup";
import { ForgotPassword } from "./components/forgotPassword";  // Importar el componente ForgotPassword
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar la página actual

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </>
        );
      case 'login':
        return <Login onNavigate={setCurrentPage} />;  // Pasar la función setCurrentPage a Login
      case 'signup':
        return <Signup onNavigate={setCurrentPage} />;  // Pasar la función setCurrentPage a Signup
      case 'forgot-password':  // Nuevo caso para ForgotPassword
        return <ForgotPassword onNavigate={setCurrentPage} />;  // Pasar la función setCurrentPage a ForgotPassword
      default:
        return (
          <>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </>
        );
    }
  };

  return (
    <div>
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} /> {/* Pasar la función setCurrentPage y currentPage */}
      {renderPage()}
    </div>
  );
};

export default App;
