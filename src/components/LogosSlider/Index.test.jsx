import React from "react";
import LogoSlider from "./Index";
import renderer from "react-test-renderer";

test("Snapshop test of LogoSlider component", () => {
  const map = renderer.create(<LogoSlider />);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});
