import "./searchbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
export const SearchBar = () => {
    return (
        <div className="searchbar-container">
        <SearchOutlinedIcon className="searchbar-icon"/>
        <input className="searchbar-text" type="text" placeholder="Search"/>
        <TuneOutlinedIcon className="filter-button"/>
        </div>
    )
}
