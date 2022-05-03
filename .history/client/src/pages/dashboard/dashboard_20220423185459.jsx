import React, { useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
const Dashboard = () => {
  // ✅ a change in default state: { from: ..., to: ... }
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });
  return (
    <>
      <Navbar />
      <div>Dashboard</div>
      <Calendar
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        shouldHighlightWeekends
      />
    </>
  );
};

export default Dashboard;
