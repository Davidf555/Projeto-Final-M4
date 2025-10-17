import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Energia Renovável com Propósito</h1>
        <p>
          Conectando pessoas e ONGs que impulsionam um futuro sustentável com energia limpa.
        </p>
        <a href="#ongs" className="banner-btn">
          Conheça as ONGs
        </a>
      </div>
    </section>
  );
}

export default Banner;
