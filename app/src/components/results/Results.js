// Page for fullscreen results
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import ResultCard from "./ResultCard";
import "../../css/Results.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Results() {
  const [gsiResults, setGsiResults] = useState();

  //Filter is a search filter (based on url)
  let { filter } = useParams();

  const getData = () => {
    if (filter) {
      axios
        .get(`http://localhost:4000/gsis/${filter}`)
        .then((data) => {
          console.log(data);
          setGsiResults(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get("http://localhost:4000/allgsis")
        .then((data) => {
          console.log(data);
          setGsiResults(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className="results-header">Search Results</div>
      <div className="results-container">
        {gsiResults &&
          gsiResults.map((gsi) => (
            <ResultCard
              id={gsi._id}
              name={gsi.name}
              rating={gsi.rating}
              classes={gsi.classesTaught}
            ></ResultCard>
          ))}
      </div>
    </div>
  );
}

export default Results;
