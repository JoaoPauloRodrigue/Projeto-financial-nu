import "./style.css";
import logoDash from "../../assets/image/logoDashboard.svg";
import { Button } from "../Button/index";

export const Header = ({ setTurnThePage }) => {
  return (
    <div className="header-container">
      <header className="header">
        <img className="logo-dashboard" src={logoDash} alt="logo" />
        <Button
          className="btn-log-out"
          type="button"
          onClick={() => setTurnThePage(true)}
        >
          Início
        </Button>
      </header>
    </div>
  );
};
