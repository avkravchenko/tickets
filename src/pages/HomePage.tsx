import React from "react";
import Header from "../layout/Header.tsx";
import Filters from "../components/filters/Filters.tsx";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <Filters />
    </div>
  );
};

export default HomePage;
