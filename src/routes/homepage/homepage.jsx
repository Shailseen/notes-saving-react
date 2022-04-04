import { Aside } from "../../component/aside/aside"
import { Navbar } from "../../component/navbar/navbar"
import { NotesPage } from "../../component/notespage/notes-page"
import "./homepage.css"

export const HomePage = () => {
    return (
        <>
        <Navbar/>
        <div className="homePage-grid-container">
        <Aside/>
        <NotesPage/>
        </div>
        </>
    )
}