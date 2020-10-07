import React from "react";
import scheduler from "../images/scheduler.png";

export default function Scheduler(props) {
  const { onClick, headerInfo, headerDemo, max769, headerPosition } = props;

  return (
    <div className={headerPosition} onClick={onClick}>
      <img
        src={scheduler}
        className={headerDemo}
      ></img>
      <div className={headerInfo}>
        <h3>Scheduler</h3>
          {max769
            ? `Simple, single-page app that
          allows users to book time with interviewers based on
          information rendered from an API server.`
            : `Interview Scheduler ("scheduler") is a simple, single-page app that
          allows users to input names and select interviewers based on
          information rendered from an API server. The project focuses on the
          use of React.js and was developed with a combination React Webpack,
          Babel, Axios and Storybook. It was also tested using Jest and Cypress.`}
        <p>
          <a href="https://github.com/andrewtrac/scheduler">Github</a>
        </p>
      </div>
    </div>
  );
}
