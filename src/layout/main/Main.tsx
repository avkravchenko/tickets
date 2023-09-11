import React from "react";
import Filters from "../../components/filters/Filters";
import Results from "../../components/results/Results";
import "./main.scss";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="main-wrapper">
      <Filters />
      <Results />
    </div>
  );
};

export default Main;
