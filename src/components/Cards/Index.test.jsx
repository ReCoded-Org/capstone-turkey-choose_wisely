import React from "react";
import Cards from "./Index";
import renderer from "react-test-renderer";

test("Snapshop test of Cards component", () => {
  const map = renderer.create(<Cards />);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});