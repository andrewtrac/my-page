import React, { useState } from "react";
import Portfolio from './Portfolio'
import "./styles/Header.scss";
import "./styles/Body.scss";
import "./styles/Portfolio.scss"

export default function Body() {

const [portfolio, setPortfolio] = useState("")
const resetHeader = () => {
  setPortfolio("")
}

const updateportfolio = (portfolioInput) => {
  if (portfolioInput === "tweeter") {
    setPortfolio("tweeter")
  } else if (portfolioInput === "mapbook") {
    setPortfolio("mapbook")
  }
}

  return (
    <div className="Body">
      <Portfolio resetHeader={resetHeader} portfolio={portfolio} updateportfolio={updateportfolio} />
    </div>
  );
}
