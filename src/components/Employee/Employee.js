import React, { useState } from "react";
import "./style.css";
import { Search } from "lucide-react";
import Card from "../Card/Card";

const allEmployees = [
  {
    id: 1,
    name: "Arjun",
    dob: "16-11-2000",
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "Mahesh",
    dob: "16-11-2000",
    role: "Web Developer",
  },
  {
    id: 3,
    name: "John",
    dob: "02-05-1995",
    role: "Data Analyst",
  },
  {
    id: 4,
    name: "Emily",
    dob: "12-09-1998",
    role: "UI/UX Designer",
  },
  {
    id: 5,
    name: "Alice",
    dob: "25-03-2001",
    role: "Frontend Developer",
  },
  {
    id: 6,
    name: "Bob",
    dob: "14-07-1993",
    role: "Backend Developer",
  },
  {
    id: 7,
    name: "Lisa",
    dob: "30-11-1990",
    role: "Project Manager",
  },
  {
    id: 8,
    name: "David",
    dob: "09-04-1987",
    role: "System Administrator",
  },
  {
    id: 9,
    name: "Sarah",
    dob: "18-08-1992",
    role: "Business Analyst",
  },
  {
    id: 10,
    name: "Michael",
    dob: "05-12-1985",
    role: "Software Engineer",
  },
  {
    id: 11,
    name: "Emma",
    dob: "23-06-1997",
    role: "Web Developer",
  },
  {
    id: 12,
    name: "Ryan",
    dob: "07-10-1991",
    role: "Data Scientist",
  },
  {
    id: 13,
    name: "Sophia",
    dob: "17-01-1989",
    role: "UI/UX Designer",
  },
  {
    id: 14,
    name: "James",
    dob: "29-08-2002",
    role: "Frontend Developer",
  },
  {
    id: 15,
    name: "Olivia",
    dob: "11-03-1996",
    role: "Backend Developer",
  },
  {
    id: 16,
    name: "Alexander",
    dob: "03-07-1986",
    role: "Project Manager",
  },
  {
    id: 17,
    name: "Ethan",
    dob: "19-05-2000",
    role: "System Administrator",
  },
  {
    id: 18,
    name: "Ava",
    dob: "28-09-1993",
    role: "Business Analyst",
  },
  {
    id: 19,
    name: "William",
    dob: "15-02-1988",
    role: "Software Engineer",
  },
  {
    id: 20,
    name: "Charlotte",
    dob: "22-04-1994",
    role: "Web Developer",
  },
];
const Employee = () => {
  const [employees, setEmployees] = useState(allEmployees);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    setEmployees(
      allEmployees.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="employeeContainer">
      <div className="search">
        <input
          value={input}
          onChange={handleSearch}
          type="text"
          placeholder="Search with name"
        />
        <Search />
      </div>
      <div className="employeeList">
        {employees.map((item, index) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default Employee;
