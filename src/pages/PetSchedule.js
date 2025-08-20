import React, { useState, useEffect } from "react";
import "../style/style.css";

const PetSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  // Load schedule from localStorage on mount
  useEffect(() => {
    const storedSchedule = JSON.parse(localStorage.getItem("petSchedule"));
    if (storedSchedule) setSchedule(storedSchedule);
  }, []);

  // Save schedule to localStorage when updated
  useEffect(() => {
    localStorage.setItem("petSchedule", JSON.stringify(schedule));
  }, [schedule]);

  const addTask = () => {
    if (task && time) {
      setSchedule([...schedule, { task, time }]);
      setTask("");
      setTime("");
    }
  };

  const removeTask = (index) => {
    setSchedule(schedule.filter((_, i) => i !== index));
  };

  const clearSchedule = () => {
    setSchedule([]);
  };

  return (
    <div className="schedule-container">
      <h2>📅 Pet Care Scheduler</h2>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter task (e.g., Feed dog)" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
        <button onClick={addTask} className="add-btn">➕ Add Task</button>
      </div>

      {schedule.length > 0 && (
        <>
          <ul className="schedule-list">
            {schedule.map((item, index) => (
              <li key={index} className="schedule-item">
                <span>🐶 {item.task} at {item.time}</span>
                <button className="remove-btn" onClick={() => removeTask(index)}>❌</button>
              </li>
            ))}
          </ul>
          <button onClick={clearSchedule} className="clear-btn">🗑️ Clear All</button>
        </>
      )}
    </div>
  );
};

export default PetSchedule;
