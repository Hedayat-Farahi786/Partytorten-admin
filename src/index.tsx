import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";
import { Provider } from "react-redux";
import { store } from "./api/store";
import Main from "./components/Main";

const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Flowbite theme={{ theme }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </Flowbite>
  </StrictMode>
);
