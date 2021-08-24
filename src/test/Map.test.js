import React from "react";
import Map from "./../components/Map/index.jsx";
import renderer from "react-test-renderer";

test("Snapshop test of Map component", () => {
  const map = renderer.create(<Map />);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});
