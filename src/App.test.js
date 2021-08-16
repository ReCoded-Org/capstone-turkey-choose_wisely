import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 50000,
  offset: "1.875rem",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("test scss", () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </Provider>
    );
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
