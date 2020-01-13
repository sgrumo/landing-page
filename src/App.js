import React from "react";
import "./App.scss";
import { ReactComponent as Logo } from './logoAntreem.svg';
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("UA-59238164-13");
  ReactGA.pageview(window.location.pathname + window.location.search);

  ReactGA.ga("send", "pageview", "casehistory.antreem.com");

  const sendEvent = (pdfName) => {
    ReactGA.event({ category: 'Link', action: 'Open PDF', label: pdfName })
  }

  const imgFooterFirst = [
    "/partner/alfasigma",
    "/partner/banca-popolare-sondrio",
    "/partner/bper",
    "/partner/carserver",
    "/partner/cefla",
    "/partner/creval",
    "/partner/crif",
    "/partner/fideuram",
    "/partner/rekeep"
  ];

  const imgFooterSecond = [
    "/partner/finantix",
    "/partner/intesa-san-paolo",
    "/partner/ior",
    "/partner/laverdi",
    "/partner/piccolo",
    "/partner/segugio",
    "/partner/unicredit",
    "/partner/vivaticket",
    "/partner/prometeia"
  ];

  const projects = [
    {
      img: "easyaccess",
      pdf: "/projects/EASYACCES.pdf",
      titolo: "EASYACCESS",
      sottotitolo: "Cefla",
      descrizione: "Gestione e controllo dei macchinari biomedicali."
    },
    {
      img: "valentina",
      pdf: "/projects/VALENTINA.pdf",
      titolo: "VALENTINA",
      sottotitolo: "BPER",
      descrizione: "Progetto di intelligenza artificiale applicata a un assistente virtuale per il digital banking."
    },
    {
      img: "scenario",
      pdf: "/projects/ESS.pdf",
      titolo: "ECONOMIC SCENARIO SERVICE",
      sottotitolo: "Prometeia",
      descrizione: "Un servizio per integrare la gestione di scenari di mercato all'interno dei propri processi decisionali."
    }
  ];

  const listFooterFirst = imgFooterFirst.map((value, index) => {
    const imgSet = `${value}.png, ${value}@2x.png, ${value}@3x.png`;
    const imgSrc = `${value}@3x.png`;
    return <img className="col img-fluid first" key={index} srcSet={imgSet} src={imgSrc} alt={value} />
  });

  const listFooterSecond = imgFooterSecond.map((value, index) => {
    const imgSet = `${value}.png, ${value}@2x.png, ${value}@3x.png`;
    const imgSrc = `${value}@3x.png`;
    return <img className="col img-fluid second" key={index} srcSet={imgSet} src={imgSrc} alt={value} />
  })

  const listProjects = projects.map((value, index) => {
    const imgSet = `/projects/${value.img}.png, /projects/${value.img}@2x.png, /projects/${value.img}@3x.png`;
    const imgSrc = `${value.img}@3x.png`;
    return (
      <div key={index} className="project col-12 col-sm-4 col-md-4 col-lg-4">
        <div className="imgContainer">
          <a href={value.pdf} onClick={() => sendEvent(value.titolo)}>
            <img className="project-img" srcSet={imgSet}
              src={imgSrc} alt={value.titolo} />
            <img src="/projects/visibility.png" alt="visibility" className="visibility" />
          </a>
          <div className="overlay-box"></div>
        </div>
        <h3>{value.titolo}</h3>
        <h4>{value.sottotitolo}</h4>
        <p>{value.descrizione}</p>
      </div>
    )
  });

  return (
    <main>
      <a href="https://antreem.com/it" ><Logo className="logo" /></a>
      <h1>Storie di innovazione</h1>
      <p className="subtitle">Scopri alcuni dei nostri progetti</p>
      <div className="container projectsContainer">
        <div className="row">
          {listProjects}
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row row-cols-xs-4 row-cols-md-9">
            {listFooterFirst}
          </div>
          <div className="row row-cols-xs-4row-cols-md-9">
            {listFooterSecond}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
