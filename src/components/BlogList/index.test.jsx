import React from "react";
import BlogList from "./index";
import renderer from "react-test-renderer";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

const blog = {
  header: "Latest Blog Posts",
  title:
    "Home is behind, the world ahead and there are many paths to tread through shadows to the edge.",
};
test("Snapshop test of BlogList component", () => {
  const map = renderer.create(<BlogList {...blog} />);
  let tree = map.toJSON();

  expect(tree).toMatchSnapshot();
});
