import { NotesCard } from "../notesCard/notes-card"
import { SearchBar } from "../searchbar/searchbar"
import "./notes-page.css"

export const NotesPage = () => {
    return (
        <section className="notes-display-container">
        <SearchBar/>
        <NotesCard/>
        </section>
    )
}