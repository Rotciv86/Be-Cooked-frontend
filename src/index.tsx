import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/mainTheme";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
