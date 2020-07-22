import React, { useState } from "react";
import Portfolio from './Portfolio'
import "./styles/Header.scss";
import "./styles/Body.scss";
import "./styles/Portfolio.scss"

export default function Body(props) {

const [portfolio, setPortfolio] = useState("")
const resetHeader = () => {
  setPortfolio("")
}

const updateportfolio = (portfolioInput) => {
  setPortfolio(portfolioInput)
}

  return (
    <div className="Body">
      <Portfolio resetHeader={resetHeader} portfolio={portfolio} updateportfolio={updateportfolio} />
    </div>
  );
}
