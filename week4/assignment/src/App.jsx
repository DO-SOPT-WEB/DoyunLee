// import Router from "./components/Router";
import { useState } from "react";
import LogInPage from "./pages/login/loginPage";
// import { GlobalStyle } from "./styles/GlobalStyle.js";

function App() {
  const [state, setState] = useState("");

  return (
    <>
      <LogInPage />
      {/* <Router /> */}
    </>
  );
}

export default App;
