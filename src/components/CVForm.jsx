import { useState } from "react";
import "../styles/CVForm.css";
/**
 * Renders a form for creating and editing a CV.
 * If `isEdit` is `true`, displays an editable form with input fields.
 * If `isEdit` is `false`, displays a read-only form with the values entered in the input fields.
 */
export default function CVForm() {
  const [isEdit, setIsEdit] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [workStart, setWorkStart] = useState("");
  const [workedUntil, setWorkedUntil] = useState("");

  /**
   * Handles form submission. Sets `isEdit` to `false` to switch to read-only mode.
   */
  function handleSubmit() {
    setIsEdit(false);
  }

  /**
   * Handles the "Edit" button click. Sets `isEdit` to `true` to switch to editable mode.
   */
  function handleEdit() {
    setIsEdit(true);
  }

  if (isEdit) {
    return (
      <div>
        <h1>CV Application</h1>
        <h2>General Information</h2>
        <label>
          Name:{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <br />
        <label>
          Phone:{" "}
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            name=""
            id=""
          />
        </label>
        <h2>Educational Experience</h2>
        <label>
          School Name:{" "}
          <input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            type="text"
          />
        </label>
        <br />
        <label>
          Title of Study:{" "}
          <input
            value={studyTitle}
            onChange={(e) => setStudyTitle(e.target.value)}
            type="text"
          />
        </label>
        <br />
        <label>
          Date of Study:{" "}
          <input
            value={studyDate}
            onChange={(e) => setStudyDate(e.target.value)}
            type="date"
            name=""
            id=""
          />
        </label>
        <h2>Practical Experience</h2>
        <label>
          Company Name:{" "}
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
          />
        </label>
        <br />
        <label>
          Position:{" "}
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            type="text"
          />
        </label>
        <br />
        <label>
          Worked for {company} from{" "}
          <input
            value={workStart}
            onChange={(e) => setWorkStart(e.target.value)}
            type="date"
            name=""
            id=""
          />{" "}
          until
          <input
            value={workedUntil}
            onChange={(e) => setWorkedUntil(e.target.value)}
            type="date"
            name=""
            id=""
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
    );
  } else {
    return (
      <>
        <h1>CV Application</h1>
        <h2>general information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <h2>Educational experience</h2>
        <p>School name: {school}</p>
        <p>Title of study: {studyTitle}</p>
        <p>Date of study: {studyDate}</p>
        <h2>practical experience</h2>
        <p>Company name: {company}</p>
        <p>Position: {position}</p>
        Worked for {company} from {workStart} until {workedUntil}
        <br />
        <button type="submit" onClick={handleEdit}>
          Edit
        </button>
      </>
    );
  }
}
