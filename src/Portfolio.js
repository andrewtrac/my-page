import React, { useEffect } from "react";
import Tweeter from "./headers/Tweeter";
import Mapbook from "./headers/Mapbook";
import Pathfinder from "./headers/Pathfinder";
import Scheduler from "./headers/Scheduler";
import Tinyapp from "./headers/Tinyapp";
import Particles from "react-particles-js";

let classNames = require("classnames");

export default function Portfolio(props) {
  const { portfolio, resetHeader, updateportfolio, max769 } = props;

  useEffect(() => {
    resetHeader();
  }, []);

  let portfolioBlockClass = classNames({
    Portfolio__block: !max769,
    Portfolio__small: max769,
  });

  let headerSizeClass = classNames({
    Header: !max769,
    Header__small: max769,
  });

  let headerDemo = classNames({
    Header__demo: !max769,
    HeaderSmall__demo: max769,
  });

  let headerInfo = classNames({
    Header__info: !max769,
    HeaderSmall__info: max769,
  });

  let headerPosition = classNames({
    Header__tweeter: !max769,
    HeaderSmall__tweeter: max769,
  });

  return (
    <div>
      {portfolio === "tweeter" && (
        <Tweeter
          headerDemo={headerDemo}
          headerInfo={headerInfo}
          onClick={resetHeader}
          headerPosition={headerPosition}
          max769={max769}
        />
      )}
      {portfolio === "mapbook" && (
        <Mapbook
          headerDemo={headerDemo}
          headerInfo={headerInfo}
          onClick={resetHeader}
          headerPosition={headerPosition}
          max769={max769}
        />
      )}
      {portfolio === "pathfinder" && (
        <Pathfinder
          headerPosition={headerPosition}
          max769={max769}
          headerDemo={headerDemo}
          headerInfo={headerInfo}
          onClick={resetHeader}
        />
      )}
      {portfolio === "scheduler" && (
        <Scheduler
          headerPosition={headerPosition}
          headerDemo={headerDemo}
          headerInfo={headerInfo}
          onClick={resetHeader}
          max769={max769}
        />
      )}
      {portfolio === "tinyapp" && (
        <Tinyapp
          headerPosition={headerPosition}
          headerDemo={headerDemo}
          headerInfo={headerInfo}
          onClick={resetHeader}
          max769={max769}
        />
      )}
      {portfolio === "" && (
        <div className={headerSizeClass}>
          <Particles
            className="Header__particles"
            params={{
              particles: {
                number: {
                  value: 450,
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 10,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 4,
                  direction: "top",
                  out_mode: "out",
                },
                color: {
                  value: "#ffdb6e",
                },
              },
            }}
          />
          <div className="Header__maintext">
            <span style={max769 ? { fontSize: "40px" } : { fontSize: "60px" }}>
              Portfolio
            </span>
            <br></br>
            <span style={max769 ? { fontSize: "18px" } : { fontSize: "25px" }}>
              Hover and click on tiles below
            </span>
          </div>
        </div>
      )}

      <div className="Portfolio">
        <div
          className={portfolioBlockClass}
          style={{ backgroundImage: `url(${require("./images/mapbook.png")})` }}
          onClick={(e) => updateportfolio("mapbook")}
        ></div>
        <div
          className={portfolioBlockClass}
          style={{
            backgroundImage: `url(${require("./images/pathfinder.png")})`,
          }}
          onClick={(e) => updateportfolio("pathfinder")}
        ></div>
        <div
          className={portfolioBlockClass}
          style={{ backgroundImage: `url(${require("./images/tweeter.png")})` }}
          onClick={(e) => updateportfolio("tweeter")}
        ></div>
        <div
          className={portfolioBlockClass}
          style={{
            backgroundImage: `url(${require("./images/scheduler.png")})`,
          }}
          onClick={(e) => updateportfolio("scheduler")}
        ></div>
        <div
          className={portfolioBlockClass}
          style={{ backgroundImage: `url(${require("./images/tinyapp.png")})` }}
          onClick={(e) => updateportfolio("tinyapp")}
        ></div>
      </div>
    </div>
  );
}
