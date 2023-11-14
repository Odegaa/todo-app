import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Analytics } from "@vercel/analytics/react";

import { App } from "./App.tsx";
import { store } from "./store";
import "./i18next.ts";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import weekday from "dayjs/plugin/weekday";
import localeDate from "dayjs/plugin/localeData";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

import "antd/dist/reset.css";
import "./assets/styles/base/_reset.scss";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeDate);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Analytics />
    </Provider>
  </BrowserRouter>
);
