import React, { Component } from "react";

export const withTracker = (options) => {
  let options_ = options;
  if (typeof options === "function") {
    options_ = options();
  }

  return (WrappedComponent) =>
    class ReactMeteorData extends Component {
      render() {
        return <WrappedComponent {...options_} />;
      }
    };
};
