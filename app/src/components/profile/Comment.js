//Structure for individual comment

import { Rating } from "@mui/material";

function Comment({ id, name, rating, review }) {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <Rating value={rating} precision={0.5} readOnly></Rating>
      </div>
      <div style={{padding:40 }}>
        <p>{review}</p>
      </div>
    </div>
  );
}

export default Comment;
