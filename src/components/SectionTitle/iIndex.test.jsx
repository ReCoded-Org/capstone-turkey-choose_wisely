import React from "react";
import SectionTitle from "./index";
import renderer from "react-test-renderer";

test("Snapshop test of sectionTitle component", () => {
  const map = renderer.create(<SectionTitle />);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});
