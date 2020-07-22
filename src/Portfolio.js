import React from "react";
import Tweeter from './headers/Tweeter'
import Mapbook from './headers/Mapbook'

export default function Portfolio (props) {

  const { portfolio, resetHeader, updateportfolio } = props


return (
<div>
{portfolio === "tweeter" && <Tweeter onClick={resetHeader} />}
{portfolio === "mapbook" && <Mapbook onClick={resetHeader} />}

{portfolio === "" &&  <div className="Header">
  <span style={{fontSize: "60px"}}>Portfolio</span>
  <br></br>
  <span style={{fontSize: "25px"}}>Hover and click on tiles below</span>
</div>}

<div className="Portfolio">
  <div className="Portfolio__block" onClick={e => updateportfolio("tweeter")}></div>
  <div className="Portfolio__block" onClick={e => updateportfolio("mapbook")}></div>
  <div className="Portfolio__block"></div>
  <div className="Portfolio__block"></div>
</div>
</div>
)

}