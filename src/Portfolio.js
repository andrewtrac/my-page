import React, { useEffect } from "react";
import Tweeter from './headers/Tweeter'
import Mapbook from './headers/Mapbook'
import Pathfinder from "./headers/Pathfinder";
import Scheduler from "./headers/Scheduler";
import Tinyapp from "./headers/Tinyapp";

export default function Portfolio (props) {

  const { portfolio, resetHeader, updateportfolio } = props

  useEffect(() => {
    resetHeader();
  }, []); 


return (
<div>
{portfolio === "tweeter" && <Tweeter onClick={resetHeader} />}
{portfolio === "mapbook" && <Mapbook onClick={resetHeader} />}
{portfolio === "pathfinder" && <Pathfinder onClick={resetHeader} />}
{portfolio === "scheduler" && <Scheduler onClick={resetHeader} />}
{portfolio === "tinyapp" && <Tinyapp onClick={resetHeader} />}
{portfolio === "" &&  <div className="Header">
  <span style={{fontSize: "60px"}}>Portfolio</span>
  <br></br>
  <span style={{fontSize: "25px"}}>Hover and click on tiles below</span>
</div>}

<div className="Portfolio">
  <div className="Portfolio__block" style={{backgroundImage: `url(${require("./images/mapbook.png")})` }} onClick={e => updateportfolio("mapbook")}></div>
  <div className="Portfolio__block" style={{backgroundImage: `url(${require("./images/pathfinder.png")})` }} onClick={e => updateportfolio("pathfinder")}></div>
  <div className="Portfolio__block" style={{backgroundImage: `url(${require("./images/tweeter.png")})` }} onClick={e => updateportfolio("tweeter")}></div>
  <div className="Portfolio__block" style={{backgroundImage: `url(${require("./images/scheduler.png")})` }} onClick={e => updateportfolio("scheduler")}></div>
  <div className="Portfolio__block" style={{backgroundImage: `url(${require("./images/tinyapp.png")})` }} onClick={e => updateportfolio("tinyapp")}></div>
</div>
</div>
)

}