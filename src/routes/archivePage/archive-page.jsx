import { Archive } from "../../component/archive/archive"
import { Aside } from "../../component/aside/aside"
import { Navbar } from "../../component/navbar/navbar"
import { SearchBar } from "../../component/searchbar/searchbar"

export const ArchivePage = () => {
    return (
        <>
        <Navbar/>
        <div className="center-grid-container">
          <Aside/>
          <Archive/>
        </div>
        </>
    )
} 