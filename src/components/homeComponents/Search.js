import React from "react";

const Search = () => {
  return (
    <>
      <div className="search">
        <h2 className="h1 text-center" style={{ marginTop: "100px" }}>
          Awesome Exercises You Should Know
        </h2>
        <div className="search_input">
          <input type={"text"} placeholder={"Search Exercisess"} />
          <button>Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
