import { useState } from "react";
import { useNotes } from "../../context/notes-context";
import { AddCard } from "../add-card/addCard";
import { NotesCard } from "../notesCard/notes-card";
import { SearchBar } from "../searchbar/searchbar";
import "./notes-page.css";

export const NotesPage = () => {
  const { notesList, archiveList } = useNotes();
  const [sortBy, setSortBy] = useState("");
  sortBy !== "NEWER_FIRST"
    ? notesList.sort((a, b) => new Date(a.todayTime) - new Date(b.todayTime))
    : notesList.sort((a, b) => new Date(b.todayTime) - new Date(a.todayTime));
  return (
    <section className="notes-display-container">
      <SearchBar />
      <AddCard />
      <div className="sortBy-container">
        <h3>Sort By Date:</h3>
        <div className="input-container">
          <div className="input-label-container">
            <input
              type="radio"
              name="sortByDate"
              id="newerFirst"
              onChange={() => setSortBy(() => "NEWER_FIRST")}
            />
            <label htmlFor="newerFirst">Newer First</label>
          </div>
          <div className="input-label-container">
            <input
              type="radio"
              name="sortByDate"
              id="olderFirst"
              onChange={() => setSortBy(() => "OLDER_FIRST")}
            />
            <label htmlFor="olderFirst">Older First</label>
          </div>
        </div>
      </div>
      {notesList.length !== 0 &&
        notesList.map((item) => (
          <NotesCard isArchive={false} key={item._id} item={item} />
        ))}
    </section>
  );
};
