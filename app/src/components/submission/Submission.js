// Page to submit new GSI information
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import "../../css/Submission.css";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import axios from "axios";

function Submission() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [classes, setClasses] = useState();
  const [linkedin, setLinkedin] = useState();
  const [email, setEmail] = useState();
  const [pronouns, setPronouns] = useState();
  const [semester, setSemester] = useState();
  const [major, setMajor] = useState();
  const [check, setCheck] = useState(false);
  const [error, setError] = useState();

  const submit = () => {
    if (
      firstName &&
      lastName &&
      classes &&
      linkedin &&
      email &&
      pronouns &&
      check
    ) {
      let classesTaught = classes.split(", ");
      let semesters = semester.split(", ");
      axios
        .post("http://localhost:4000/gsi/post", {
          name: `${firstName} ${lastName}`,
          email: email,
          linkedin: linkedin,
          rating: 0,
          ratingCount: 0,
          classesTaught: classesTaught,
          pronouns: pronouns,
          major: major,
          semesters: semesters,
        }, { headers: {
          "Access-Control-Allow-Origin": "*",
        }})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("Please fill out all of the required areas");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="submission-container">
        <h1>Submit a GSI</h1>
        <p>
          Important: If the GSI is already listed on the website, you will not
          be able to submit.
        </p>
        <p>
          Please use the search bar above to make sure the GSI is not already
          listed on this website.
        </p>
        <FormControl className="form-container">
          <TextField
            required
            label="GSI First Name"
            margin="normal"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <TextField
            required
            label="GSI Last Name"
            margin="normal"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <TextField
            required
            label="Class (comma separated)"
            margin="normal"
            onChange={(event) => {
              setClasses(event.target.value);
            }}
          />
          <TextField
            label="LinkedIn"
            margin="normal"
            onChange={(event) => {
              setLinkedin(event.target.value);
            }}
          />
          <TextField
            label="Email"
            margin="normal"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="Pronouns"
            margin="normal"
            onChange={(event) => {
              setPronouns(event.target.value);
            }}
          />
          <TextField
            label="Semesters Taught (comma separated)"
            margin="normal"
            onChange={(event) => {
              setSemester(event.target.value);
            }}
          />
          <TextField
            label="Major"
            margin="normal"
            onChange={(event) => {
              setMajor(event.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="I have checked that the data is accurate."
            margin="normal"
            onChange={(event) => {
              setCheck(event.target.checked);
            }}
          ></FormControlLabel>
          <Button variant="contained" margin="normal" onClick={submit}>
            Submit
          </Button>
        </FormControl>
        <div>{error}</div>
      </div>
    </div>
  );
}

export default Submission;
