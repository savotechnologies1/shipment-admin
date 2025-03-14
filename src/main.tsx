import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </HelmetProvider>
  </StrictMode>
);
