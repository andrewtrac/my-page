import React from "react";
import pathfinder from "../images/pathfinder.gif";

export default function Pathfinder(props) {
  const { onClick } = props;

  return (
    <div className="Header__tweeter" onClick={onClick}>
      <img src={pathfinder} className="Header__demo"></img>
      <div class="Header__info">
        <h3>Pathfinder</h3>
        <p>
          Pathfinder is an interactive educational tool that visualizes popular
          path search and graph traversal algorithms. Users can create their own
          'maps' and watch the algorithm determine the shortest path from the
          start node to the end node. Part of a three person team who built this
          project. Front end was built with React.JS and Material UI while
          backend was supported with Ruby on Rails and PostgreSQL.
        </p>
        <p>
          <a href="https://github.com/JoshLampen/pathfinder">Github</a>
          <br></br>
        <a href="https://react-pathfinder.herokuapp.com/">Website</a>
        </p>
      </div>
    </div>
  );
}
