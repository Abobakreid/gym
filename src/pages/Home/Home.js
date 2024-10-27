import React from "react";
import "./Home.scss";
import { Cards, Banner, Search, Results } from "../../components/index";
function Home() {
  return (
    <div className="Home">
      <Banner />
      <Search />
      <Cards />
      <Results />
    </div>
  );
}

export default Home;
