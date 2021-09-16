import { useContext } from "react";
import UserContext from "../Context/UserContext";
import { IoIosExit } from "react-icons/io"
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const userContext = useContext(UserContext);
  const { userData } = userContext;
  let nameCategory = "";

  switch (userData.category) {
    case "21":
      nameCategory = "Sports";
      break;
    case "23":
      nameCategory = "History";
      break;
    case "22":
      nameCategory = "Geography";
      break;
    case "27":
      nameCategory = "Animals";
      break;
    case "24":
      nameCategory = "Politics";
      break;
  };
  return (

    <div className="navbar">
      <div className="navbar-container container">
      <Link to="/" className="navbar-logo">
                        <IoIosExit className="navbar-icon" />
                    </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            Gamer:   {userData.userName}
          </li>
          <li className="nav-item">
            Cattegory:  {nameCategory}
          </li>
          <li className="nav-item">
            Difficulty:  {userData.difficulty}
          </li>
        </ul>
      </div>
    </div>

  );
};
export default Navbar;
