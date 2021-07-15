import React from "react";

const Search=({inputVal,setInputVal,handleSearch})=>{

    return(
        <form onSubmit={handleSearch}>
            <input 
            type="text" 
            placeholder="search here for image"
            autoFocus
            value={inputVal}
            onChange={(e)=>setInputVal(e.target.value)} />
            <button>Search</button>
        </form>
    )
}

export default Search;