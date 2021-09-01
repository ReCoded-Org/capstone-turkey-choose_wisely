import React from "react";
import TopTenUniCard from "./index";
import renderer from "react-test-renderer";

test("Snapshop test of TopTenUniCard component", () => {
  const map = renderer.create(<TopTenUniCard />);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});
