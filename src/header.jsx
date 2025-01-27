import HeaderAndInputs from "./headerAndInputs";
import "./header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <HeaderAndInputs />
      <div className="headerSection"></div>
      <div className="headerSection"></div>
    </div>
  );
}
