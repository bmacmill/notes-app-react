import React from "react"
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {


    return (<div className="Search">
            <MdSearch className="Search-icon" size="1.3em" />
            <input type="text" 
                onChange={(e)=>handleSearchNote(e.target.value)} 
                placeholder="type to search" />
        </div>)
}

export default Search


//get the value of the input, then filter with contains...