// Component to store individual result cards with professor name, rating, etc...

import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import "../../css/Results.css";

// Requires: gsi's id, name, rating, and classes taught
function ResultCard({ id, name, rating, classes }) {
  return (
    <div className="card-container">
     <Button variant="text" component={Link} to={`/profile/${id}`}>
       <div>
         <div className="card-header">{name}</div>
         <div className="card-sub-container">
           <Rating value={rating} precision={0.5} readOnly></Rating>
           <div className="class-container">
             {classes && classes.map((i) => <div>{i}</div>)}
           </div>
         </div>
       </div>
     </Button>
    </div>
  );
}

export default ResultCard;
