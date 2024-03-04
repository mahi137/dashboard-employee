import React from "react";
import "./Dashboard.css";
const data = [{ day: "Monday", percentage: 4 }, { day: "Tuesday", percentage: 92 }, { day: "Wednesday", percentage: 122 }, { day: "Thursday", percentage: 93 }, { day: "Friday", percentage: 89 }, { day: "Saturday", percentage: 98 }];
const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <p className="title">Employee Productivity Dashboard</p>
      <div className="dashboardBody">
        {
          data.map((item, index) => {
            return <div key={index} className="dashboardItem" >
                <div className="dashboardItemLeft" >
                    <p>Productivity on {item.day}</p>
                    <div className="percentage" style={{ width: `${item.percentage}%` }} ></div>
                </div>
                <div className="dashboardItemRight" >
                    <p>{item.percentage}%</p>
                </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;
