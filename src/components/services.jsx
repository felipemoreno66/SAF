import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestras Flotas</h2>
          <p>
            hi
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className={`col-md-${i < 3 ? '4' : '6'} col-sm-12`}>
                  {" "}
                  <img
                    src={`img/services/s${i + 1}.jpg`}
                    alt={d.name}
                    style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
