import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import PersonIcon from '@mui/icons-material/Person';
import "./mobileAside.css";
import { NavLink } from "react-router-dom";
export const MobileAside = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "black",
    fontWeight: isActive ? "bold" : "",
  });
  return (
    <div className="mobile-aside-container">
      <ul>
        <NavLink
          className="txt-decoration-none"
          style={getActiveStyle}
          to="/home"
        >
          <li className="flex">
            <HomeIcon sx={{ fontSize: 32 }} />
          </li>
        </NavLink>
        <NavLink
          className="txt-decoration-none"
          style={getActiveStyle}
          to="/label"
        >
          <li className="flex">
            <LabelIcon sx={{ fontSize: 32 }} />
          </li>
        </NavLink>
        <NavLink
          className="txt-decoration-none"
          style={getActiveStyle}
          to="/archive"
        >
          <li className="flex">
            <ArchiveIcon sx={{ fontSize: 32 }} />
          </li>
        </NavLink>
        <NavLink className="txt-decoration-none" style={getActiveStyle} to="/profile">
          <li className="flex">
            <PersonIcon sx={{ fontSize: 32 }} />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
