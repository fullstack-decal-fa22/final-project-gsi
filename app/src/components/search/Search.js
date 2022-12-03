// Page for fullscreen search, will also probably be default page
import Navbar from "../shared/Navbar";
import Searchbar from "../shared/Searchbar";
import Image from "mui-image";
import "../../css/Search.css";
import logo from "../../assets/logo.png";

function Search() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="center-container">
        <Image src={logo} height="20%" width="20%" fit="contain"></Image>{" "}
        <Searchbar></Searchbar>
      </div>
    </div>
  );
}

export default Search;
