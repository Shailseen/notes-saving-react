import { useNotes } from "../../context/notes-context";
import { NotesCard } from "../notesCard/notes-card";
import { SearchBar } from "../searchbar/searchbar";

export const Archive = () => {
    const {archiveList} = useNotes()
  return (
    <section className="notes-display-container">
      <SearchBar />
      {archiveList.length !== 0 &&
        archiveList.map((item) => <NotesCard isArchive={true} key={item._id} item={item} />)}
    </section>
  );
};
