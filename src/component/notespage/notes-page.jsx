import { useNotes } from "../../context/notes-context";
import { AddCard } from "../add-card/addCard";
import { NotesCard } from "../notesCard/notes-card";
import { SearchBar } from "../searchbar/searchbar";
import "./notes-page.css";

export const NotesPage = () => {
  const { notesList,archiveList } = useNotes();
  console.log(archiveList);
  return (
    <section className="notes-display-container">
      <SearchBar />
      <AddCard />
      {notesList.length !== 0 &&
        notesList.map((item) => <NotesCard isArchive={false} key={item._id} item={item} />)}
    </section>
  );
};
