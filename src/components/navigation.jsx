import React from "react";

export const Navigation = ({ onNavigate, currentPage }) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ paddingLeft: '0' }}>
      <div className="container" style={{ paddingLeft: '0' }}>
        <div className="navbar-header" style={{ marginLeft: '-350px' }}>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{ display: 'flex', alignItems: 'center', marginLeft: '0' }}>
            <img src="/img/logo.png" alt="SAF Mobility Logo" style={{ height: '100px', marginRight: '10px' }} />
            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>SAF MOBILITY</span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
           <ul className="nav navbar-nav navbar-right">
            <li className={currentPage === 'home' ? 'active' : ''}>
              <a href="#features" className="page-scroll" onClick={() => onNavigate('home')}>
              NUESTROS SERVICIOS
              </a>
            </li>
            <li className={currentPage === 'about' ? 'active' : ''}>
              <a href="#about" className="page-scroll" onClick={() => onNavigate('about')}>
              QUIENES SOMOS
              </a>
            </li>
            <li className={currentPage === 'services' ? 'active' : ''}>
              <a href="#services" className="page-scroll" onClick={() => onNavigate('services')}>
              NUESTRAS FLOTAS
              </a>
            </li>
            <li className={currentPage === 'gallery' ? 'active' : ''}>
              <a href="#portfolio" className="page-scroll" onClick={() => onNavigate('gallery')}>
              CATALOGO
              </a>
            </li>
  
            <li className={currentPage === 'team' ? 'active' : ''}>
              <a href="#team" className="page-scroll" onClick={() => onNavigate('team')}>
              TEAM
              </a>
            </li>
            <li className={currentPage === 'contact' ? 'active' : ''}>
              <a href="#contact" className="page-scroll" onClick={() => onNavigate('contact')}>
              CONTACT
              </a>
            </li>
            <li className={currentPage === 'login' ? 'active' : ''}>
              <a href="#login" className="page-scroll" onClick={() => onNavigate('login')}>
                LOGIN
              </a>
            </li>
            <li className={currentPage === 'signup' ? 'active' : ''}>
              <a href="#signup" className="page-scroll" onClick={() => onNavigate('signup')}>
                SIGNUP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

