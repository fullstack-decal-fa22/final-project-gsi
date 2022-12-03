//Search bar component from Search page and Navbar
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Searchbar.css";

function Search() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  return (
    <div className="search">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search for GSI..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyDown={(event) => {
          console.log(`Pressed keycode ${event.key}`);
          if (event.key === "Enter") {
            if (search) navigate(`/results/${search}`);
            else navigate("/results");
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default Search;
