import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("test scss", () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = getByText(/choose wisly/i);
    expect(linkElement).toBeInTheDocument();
  });
});
