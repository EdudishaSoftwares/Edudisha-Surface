import "./App.css";
import "rsuite/dist/rsuite.min.css";
import LandingPage from "./organisms/LandingPage/LandingPage";

function App() {
  const environment = import.meta.env.VITE_APP_ENV;
  switch (environment) {
    case "dev":
      document.title = "Edudisha-Dev";
      break;
    case "stage":
      document.title = "Edudisha-Stage";
      break;
    case "production":
      document.title = "Edudisha";
      break;
    default:
      document.title = "Edudisha";
  }
  return <LandingPage />;
}

export default App;
