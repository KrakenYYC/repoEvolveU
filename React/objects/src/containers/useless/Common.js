import React from "react";

function Common() {
  return <Headline />;
}

function Headline() {
  const greeting = "Hello Function Component!";
  console.log("infunctionheadline");
  return <h1>{greeting}</h1>;
}

export default Common;
