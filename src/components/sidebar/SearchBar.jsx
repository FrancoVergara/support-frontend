import { useState } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SearchBarItem from "./SearchBarItem";

const SearchBar = () => {

    const problems = useSelector( state => state.problems.problems )

    const [ search, saveSearch ] = useState('')

    return (
        <div className="input-group mt-4 position-relative">
            <span className="input-group-text">
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass}
                />
            </span>
            <input 
                type="text"
                className="form-control rounded-end p-2"
                placeholder="Buscar"
                onChange={e => { saveSearch(e.target.value)}}
                onClick={e => { saveSearch(e.target.value)}}
            />

            { search && (
                <div className="position-absolute top-100 start-50 pt-2 bg-secondary go-front rounded">
                    {problems.map( problem => (                
                        <SearchBarItem
                            key={problem._id}
                            problem={problem}
                            search={search}
                            saveSearch={saveSearch}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
 
export default SearchBar;