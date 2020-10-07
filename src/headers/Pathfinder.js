import React from "react";
import pathfinder from "../images/pathfinder.gif";

export default function Pathfinder(props) {
  const { onClick, headerInfo, headerDemo, max769, headerPosition } = props;

  return (
    <div className={headerPosition} onClick={onClick}>
      <img src={pathfinder} className={headerDemo}></img>
      <div className={headerInfo}>
        <h3>Pathfinder</h3>

        {max769
          ? `An interactive educational tool that visualizes popular
          path search and graph traversal algorithms.`
          : `Pathfinder is an interactive educational tool that visualizes popular
          path search and graph traversal algorithms. Users can create their own
          'maps' and watch the algorithm determine the shortest path from the
          start node to the end node. Part of a three person team who built this
          project. Front end was built with React.JS and Material UI while
          backend was supported with Ruby on Rails and PostgreSQL.`}
        <p>
          <a href="https://github.com/JoshLampen/pathfinder">Github</a>
          <br></br>
          <a href="https://react-pathfinder.herokuapp.com/">Website</a>
        </p>
      </div>
    </div>
  );
}
