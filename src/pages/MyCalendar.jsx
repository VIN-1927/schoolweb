import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Function to handle date selection
const handleDateChange = (setSelectedDate) => (date) => {
  setSelectedDate(date);
};

// Function to check if a date is within a break and return the break type
const isWithinBreak = (date) => {
  const autumnStart = new Date(2025, 3, 5); // 5 April 2025
  const autumnEnd = new Date(2025, 3, 21); // 21 April 2025
  const winterStart = new Date(2025, 6, 5); // 5 July 2025
  const winterEnd = new Date(2025, 6, 20); // 20 July 2025
  const springStart = new Date(2025, 8, 20); // 20 September 2025
  const springEnd = new Date(2025, 9, 5); // 5 October 2025

  // Set time to 00:00:00 for proper comparison
  const dateNoTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (dateNoTime >= autumnStart && dateNoTime <= autumnEnd) {
    return "autumn";
  } else if (dateNoTime >= winterStart && dateNoTime <= winterEnd) {
    return "winter";
  } else if (dateNoTime >= springStart && dateNoTime <= springEnd) {
    return "spring";
  }
  return null; // No break
};

const isBirthday = (date) => {
  return date.getDate() === 28 && date.getMonth() === 0; // January (0-indexed month)
};

const isCurrentDate = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// Function to check if the given date is the selected date
const isSelected = (selectedDate) => (date) => {
  if (!selectedDate) return false;
  return (
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear()
  );
};

// Function to get the tile class based on the date
const getTileClass = (date, selectedDate) => {
  if (isBirthday(date)) {
    return "birthday";
  }
  if (isCurrentDate(date)) {
    return "current-date";
  }

  // Check if the date is within any of the breaks
  const breakType = isWithinBreak(date);
  if (breakType) {
    return breakType; // Return the class based on break type
  }

  if (isSelected(selectedDate)(date)) {
    return "selected";
  }

  return "";
};

// Function to create the styles for the highlighted dates
const getHighlightStyles = () => {
  return `
    .autumn {
      background-color: #4379F2 !important;
      color: white;
      border-radius: 50%;
      padding: 10px;
    }

    .winter {
      background-color: #F7EC09 !important;
      color: black;
      border-radius: 50%;
      padding: 10px;
    }

    .spring {
      background-color: #6EC207 !important;
      color: white;
      border-radius: 50%;
      padding: 10px;
    }

    .birthday {
      background-color: #f0c040 !important;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .selected {
      background-color: #4caf50 !important;
      color: white;
      border-radius: 50%;
      padding: 10px;
    }

    .current-date {
      background-color: #ff5733 !important;
      color: white;
      border-radius: 50%;
      padding: 10px;
    }
  `;
};

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "yellow", fontSize: "20px" }}>MY CALENDAR</h2>
        <Calendar
          onChange={handleDateChange(setSelectedDate)}
          value={selectedDate}
          tileClassName={({ date }) => getTileClass(date, selectedDate)}
        />
        {/* Styling the highlighted dates */}
        <style>{getHighlightStyles()}</style>
      </div>
    </div>
  );
};

export default MyCalendar;

