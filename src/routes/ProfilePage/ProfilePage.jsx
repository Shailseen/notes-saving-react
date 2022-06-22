import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNotes } from "../../context/notes-context";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const { user, logoutHandler } = useAuth();
  const { notesList, archiveList } = useNotes();
  const { firstName, email, lastName } = user ?? {};
  console.log(user);
  return (
    <div>
      {user ? (
        <div className="profile-user-container">
          <p className="profile-user-msg">{`Hi! ${firstName}`}</p>
          <table>
            <th></th>
            <tr>
              <td className="labels">Name:</td>
              <td>{`${firstName} ${lastName}`}</td>
            </tr>
            <tr>
              <td className="labels">Email:</td>
              <td>{`${email}`}</td>
            </tr>
            <tr>
              <td className="labels">Notes:</td>
              <td>{`${notesList.length} ${
                notesList.length > 0 ? "Created" : ""
              }`}</td>
            </tr>
            <tr>
              <td className="labels">Archive:</td>
              <td>{`${archiveList.length} ${
                archiveList.length > 0 ? "Archived Notes" : ""
              }`}</td>
            </tr>
          </table>

          <button onClick={logoutHandler} className="button-style-none solid-button disable-hover button-style">
            Logout
          </button>
        </div>
      ) : (
        <div className="profile-login-container">
          <p>You have to login first</p>
          <Link to="/login">
            <button
              className="button-style-none solid-button disable-hover button-style"
            >
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
