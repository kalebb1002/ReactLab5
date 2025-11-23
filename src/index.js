import React, { useState } from 'react';
import { createPortal } from 'react-dom'; // Portal
import { createRoot } from 'react-dom/client';
import './index.css';

// Main component
function CollegeApply() {
  // Form hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  // Student type
  const [studentType, setStudentType] = useState("");

  // Residency
  const [residency, setResidency] = useState("In-State");

  // Majors
  const majors = ["Computer Science", "Business", "Biology", "Nursing", "Psychology"];
  const [selectedMajor, setSelectedMajor] = useState("");

  // Portal visibility
  const [showPortal, setShowPortal] = useState(false);

  // Portal component
const Portal = () => {
  const portalContainer = document.getElementById("portal-root");
  if (!portalContainer) return null;

  return createPortal(
    <div className="portal-popup">
      <h2>Application Submitted Successfully!</h2>
      <button onClick={() => setShowPortal(false)}>Close</button>
    </div>,
    portalContainer
  );
}

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>St. Genesius Art Academy Application</h1>

      {/* Form */}
      <form>
        <label>First Name:</label><br />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br /><br />

        <label>Last Name:</label><br />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br /><br />

        <label>Address:</label><br />
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </form>

      {/* Display input */}
      <p>{firstName} {lastName}</p>
      <p>{address}</p>

      <hr />

      {/* Student Type */}
      <button onClick={() => setStudentType("Freshman Student")}>Freshman Student</button>
      <button onClick={() => setStudentType("Transfer Student")}>Transfer Student</button>
      <p>Selected: {studentType}</p>

      <hr />

      {/* Residency Dropdown */}
      <select value={residency} onChange={(e) => setResidency(e.target.value)}>
        <option>In-State</option>
        <option>Out-of-State</option>
      </select>
      <p>Status: {residency}</p>

      <hr />

      {/* Majors List */}
      <ul>
        {majors.map((major) => <li key={major}>{major}</li>)}
      </ul>

      <hr />

      {/* Radio buttons */}
      {majors.map((major) => (
        <label key={major} style={{ display: "block" }}>
          <input type="radio" name="major" value={major} onChange={(e) => setSelectedMajor(e.target.value)} />
          {major}
        </label>
      ))}
      <p>Chosen Major: {selectedMajor}</p>

      <hr />

      {/* Apply Button */}
      <button onClick={() => setShowPortal(true)}>Submit Application</button>

      {showPortal && <Portal />}
    </div>
  );
}

// Render React root
const root = createRoot(document.getElementById('root'));
root.render(<CollegeApply />);