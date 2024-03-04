import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import helplineLogo from "../../assets/helpline.png";
import { Home, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [selectedTab, setSelectedTab] = React.useState("home");
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div className="helpline">
        <img src={helplineLogo} alt="" />
      </div>
      <div className="logo">
        <p>4</p>
        <img src={logo} alt="" />
      </div>
      <div className="children">{children}</div>

      <div className="bottomNav">
        <div
          className={"tab" + (selectedTab === "home" ? " selected" : "")}
          onClick={() => {
            setSelectedTab("home");
            navigate("/dashboard");
          }}
        >
          <Home />
        </div>
        <div
          className={"tab" + (selectedTab === "employee" ? " selected" : "")}
          onClick={() => {
            setSelectedTab("employee");
            navigate("/employee");
          }}
        >
          <UserRound />
        </div>
      </div>
    </div>
  );
};

export default Layout;
