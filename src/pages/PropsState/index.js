import { ClassComponent } from "./ClassComponent";

import { FunctionComponent } from "./FunctionComponent";

import React from "react";

const PropState = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>ClassComponent</h2>
            <ClassComponent />
          </div>
          <div className="col-md-6">
            <h2>Function Component</h2>
            <FunctionComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropState;
