import "./aside.css";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "var(--primary-color)" : "black",
  fontWeight: isActive ? "bold" : "",
});

export const Aside = () => {
  return (
    <div className="aside-container">
      <ul>
        <NavLink
          className="txt-decoration-none"
          style={getActiveStyle}
          to="/home"
        >
          <li className="flex">
            <HomeOutlinedIcon sx={{ fontSize: 32 }} />
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink
          className="txt-decoration-none"
          style={getActiveStyle}
          to="/label"
        >
          <li className="flex">
            <LabelOutlinedIcon sx={{ fontSize: 32 }} />
            <span>Label</span>
          </li>
        </NavLink>
        <NavLink
          className="txt-decoration-none"
          style={getActiveStyle}
          to="/archive"
        >
          <li className="flex">
            <Inventory2OutlinedIcon sx={{ fontSize: 32 }} />
            <span>Archive</span>
          </li>
        </NavLink>
        <NavLink className="txt-decoration-none" style={getActiveStyle} to="/profile">
          <li className="flex">
            <AccountCircleOutlinedIcon sx={{ fontSize: 32 }} />
            <span>Profile</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
