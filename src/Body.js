import React, { useState } from "react";
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import "./styles/Header.scss";
import "./styles/Body.scss";
import "./styles/Portfolio.scss"

export default function Body(props) {

const { page } = props;

const [portfolio, setPortfolio] = useState("")
const resetHeader = () => {
  setPortfolio("")
}

const updateportfolio = (portfolioInput) => {
  setPortfolio(portfolioInput)
}

  return (
    <div className="Body">
      { page === "Portfolio" && <Portfolio onClick={resetHeader} resetHeader={resetHeader} portfolio={portfolio} updateportfolio={updateportfolio} /> }
      { page === "About" && <About /> }
    </div> 
  );
}
