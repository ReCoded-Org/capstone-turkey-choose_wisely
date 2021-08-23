import React from "react";
import RessourcesHeader from "./../components/RessourcesHeader/index.jsx";
import renderer from "react-test-renderer";

test("Snapshop test of RessourcesHeader component", () => {
  const map = renderer.create(<RessourcesHeader />);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});
