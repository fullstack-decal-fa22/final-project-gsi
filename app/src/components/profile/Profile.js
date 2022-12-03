// Page for GSI Profiles
import {
  Button,
  FormControl,
  FormLabel,
  Rating,
  SvgIcon,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Email, LinkedIn } from "@mui/icons-material";
import Navbar from "../shared/Navbar";
import "../../css/Profile.css";
import Comment from "./Comment";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  let { profileid } = useParams();
  const [data, setData] = useState();
  const [newRating, setNewRating] = useState(0);
  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  const getData = () => {
    axios
      .get(`http://localhost:4000/gsi/${profileid}`)
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const submitComment = () => {
    if (!newName) setError("Please input your name");
    else if (!newRating) setError("Please input a rating");
    else {
      axios
        .post(
          `http://localhost:4000/comment/${profileid}/post`,
          {
            name: newName,
            rating: newRating,
            review: newComment,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          getData();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="profile-container">
        {/* Left Column */}
        <div style = {{}}>
          <h1 style={{ fontSize: 60, marginBottom: 15}}> {data.name} </h1>
          
          <div>
            <Rating value={data.rating} precision={0.5} readOnly></Rating>
            <h4>based on {data.ratingCount} ratings.</h4>
          </div>
          <div className="inline-container">
            {data.classesTaught.map((i) => (
              <p>Classes taught: {i}</p>
            ))}
          </div>
          <div >
            <div className="inline-container">
              <SvgIcon component={LinkedIn} style={{ paddingTop: 14}}></SvgIcon>
              <p style = {{marginLeft: 7}}>{data.linkedin}</p>
            </div>
            <div className="inline-container">
              <SvgIcon component={Email} style={{ paddingTop: 14}}></SvgIcon>
              <p style = {{marginLeft: 7}}>{data.email}</p>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div>
          <div className = "space"> </div>
          <div className="inline-container">
          <div className="title" >Pronouns: </div>
          <div className="value">{data.pronouns}</div>
          </div>
          <div className="inline-container" >
            <div className="title" >Major:</div>
            <div className= "value" >{data.major}</div>
          </div>
          <div className="inline-container">
          <div className="title" >Semesters Taught: </div>
          <div className="value" style = {{marginLeft: -60}}>
              {data.semesters.map((i) => (
                <p>{i}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Ratings */}
      <div className="ratings-container" style ={{marginTop: 30}}>
        {data.comments.map((i, index) => (
          <Comment
            id={index}
            name={i.name}
            rating={i.rating}
            review={i.review}
          ></Comment>
        ))}
        {/* New Rating Submission */}
        <div className="new-comment">
          <FormControl>
            <div className="left-comment">
            <FormLabel>New Comment</FormLabel>
            </div>
            <div className="right-comment">
            <Rating
              precision={0.5}
              onChange={(event, newValue) => {
                setNewRating(newValue);
              }}
            ></Rating>
            <div>{newRating} / 5</div>
            <TextField
              required
              id="outlined-required"
              placeholder="Your name"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            ></TextField>
            <TextField
              required
              id="outlined-required"
              placeholder="Comment here"
          multiline
          rows={4}
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
            <Button
              variant="contained"
              sx={{ ml: "auto" }}
              onClick={submitComment}
            >
              Send
            </Button>
            </div>
          </FormControl>
          <div>{error}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
