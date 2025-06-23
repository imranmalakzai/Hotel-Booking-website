import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import ContextProvider from "./Context/AppContext.jsx";
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = ReactDOM.createRoot(document.getElementById("root"));

router.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <BrowserRouter>
      <ErrorBoundary>
        <ContextProvider>
          <App />
          <Toaster />
        </ContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </ClerkProvider>
);
