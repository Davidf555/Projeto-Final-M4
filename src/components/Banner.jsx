import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Bem-vindo ao Projeto Final</h1>
        <p>
          Conectando soluções reais com tecnologia e propósito. Explore nossa API e descubra como podemos ajudar!
        </p>
        <a href="#sobre" className="banner-btn">
          Saiba mais
        </a>
      </div>
    </section>
  );
}

export default Banner;
