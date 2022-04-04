import { useNotes } from "../../context/notes-context"
import { AddCard } from "../add-card/addCard"
import { NotesCard } from "../notesCard/notes-card"
import { SearchBar } from "../searchbar/searchbar"
import "./notes-page.css"

export const NotesPage = () => {
    const {notesList} = useNotes()
    return (
        <section className="notes-display-container">
        <SearchBar/>
        <AddCard/>
        {notesList.length !== 0 && notesList.map((item) => <NotesCard key={item._id} item={item}/>)}
        </section>
    )
}