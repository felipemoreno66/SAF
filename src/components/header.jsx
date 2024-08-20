import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{ paddingTop: '300px' }}> {/* Ajuste del padding superior */}
                <h1 style={{ fontSize: '100px' }}> {/* Aumentar el tamaño del texto */}
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{ fontSize: '26px' }}>{/* Aumentar el tamaño del subtítulo */}
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <p style={{ fontSize: '24px', fontWeight: '400', marginTop: '10px' }}>{/* Ajustar el tamaño y margen del mensaje de bienvenida */}
                  {props.data ? props.data.welcomeMessage : "Loading"}
                </p>
                
                {/* Video centrado y con relación de aspecto 16:9 */}
                <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', marginTop: '30px' }}>
                  <div style={{ position: 'relative', width: '150%', paddingTop: '80%' /* Hacer el video más grande */ }}>
                    <video 
                      style={{ 
                        position: 'absolute', 
                        top: '0', 
                        left: '0', 
                        width: '100%', 
                        height: '100%' 
                      }} 
                      controls 
                    >
                      <source src="/video/Descubre SAF Mobility_ Tu Socio Confiable.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
