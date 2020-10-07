import React, { useState } from "react";
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import "./styles/Header.scss";
import "./styles/Body.scss";
import "./styles/Portfolio.scss"

export default function Body(props) {

const { page , max769 } = props;

const [portfolio, setPortfolio] = useState("")
const resetHeader = () => {
  setPortfolio("")
}

const updateportfolio = (portfolioInput) => {
  setPortfolio(portfolioInput)
}

  return (
    <div className="Body">
      { page === "Portfolio" && <Portfolio max769={max769} onClick={resetHeader} resetHeader={resetHeader} portfolio={portfolio} updateportfolio={updateportfolio} /> }
      { page === "About" && <About max769={max769} /> }
    </div> 
  );
}
