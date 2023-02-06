import { useState } from "react";
import { DashboardPage } from "./page/dashboardPage";
import { LandingPage } from "./page/landingPage";
import "./styles/App.css";

export const App = () => {
  const [turnThePage, setTurnThePage] = useState(true);

  return (
    <div className="App">
      {turnThePage ? (
        <LandingPage setTurnThePage={setTurnThePage} />
      ) : (
        <DashboardPage setTurnThePage={setTurnThePage} />
      )}
    </div>
  );
};
