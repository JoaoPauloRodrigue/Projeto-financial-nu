import React from "react";
import imageLanding from "../../assets/image/Illustration.svg";
import logo from "../../assets/image/logo.svg";
import { Button } from "../../components/Button";
import "./style.css";

export const LandingPage = ({ setTurnThePage }) => {
  return (
    <div className="bg-color">
      <div className="container">
        <section className="section-inicial-button">
          <img className="img-logo" src={logo} alt="logo" />
          <h1 className="title">Centralize o controle de suas finanças</h1>
          <p className="text-landing-page">de forma segura e rápida</p>
          <div className="btn-container-landing-page">
            <Button
              className="btn-landing-page"
              type="button"
              onClick={() => setTurnThePage(false)}
            >
              Iniciar
            </Button>
          </div>
        </section>
        <section className="section-image">
          <img
            className="image-landing-page"
            src={imageLanding}
            alt="imagem de fundo da landingPage"
          />
        </section>
      </div>
    </div>
  );
};
