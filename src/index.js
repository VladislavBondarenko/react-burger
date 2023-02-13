import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { AppModals } from "./components/Appmodals/AppModals";
import { AppProvider } from "./providers/AppProvider";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  throw new Error("no root element");
}

const root = createRoot(rootElement);

root.render(
  <AppProvider>
    <App />
    <AppModals />
  </AppProvider>
);
