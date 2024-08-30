import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  const{data,onNavigate}=props;
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Catalogo</h2>
          <p>
            A continuación puede observar algunos de los vehiculos disponibles en nuestro portafolio
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data
              ? data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      descripcion={d.descripcion}
                      descripcionn={d.descripcionn}
                      smallImage={d.smallImage}
                      onNavigate={onNavigate}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
