import React from "react";
import Card from "./Index";
import renderer from "react-test-renderer";

const speech =  {
    "part1": "Currently, Ford sells six sedans and coupes in North America with the Fiesta, Focus, Fusion, C-Max, Mustang and Taurus. This lineup hits multiple segments from the compact Fiest to the mid-size Focus, C-Max and Fusion to the full-size Taurus",
    "part2": " Emily Jørgense",
    "part3": " Author at Panoply Store"
  } 
test("Snapshop test of Card component", () => {
  const map = renderer.create(<Card {...speech}/>);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});