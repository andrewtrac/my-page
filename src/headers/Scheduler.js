import React from "react";
import scheduler from "../images/scheduler.png";

export default function Scheduler(props) {
  const { onClick } = props;

  return (
    <div className="Header__tweeter" onClick={onClick}>
      <img src={scheduler} className="Header__demo"></img>
      <div className="Header__info">
        <h3>Scheduler</h3>
        <p>
          Interview Scheduler ("scheduler") is a simple, single-page app that
          allows users to input names and select interviewers based on
          information rendered from an API server. The project focuses on the
          use of React.js and was developed with a combination React Webpack,
          Babel, Axios and Storybook. It was also tested using Jest and Cypress.
        </p>
        <p>
          <a href="https://github.com/andrewtrac/scheduler">Github</a>
        </p>
      </div>
    </div>
  );
}
