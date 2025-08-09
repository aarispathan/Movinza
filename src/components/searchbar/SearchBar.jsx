import { useState } from 'react';
import { RiSearchLine, RiCloseLargeFill } from 'react-icons/ri';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchText.trim());
    };

    const clearInput = () => {
        setSearchText('');
        onSearch('');
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search movies..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
            />
            <button
                type={searchText ? "button" : "submit"}
                className="search-btn"
                onClick={searchText ? clearInput : undefined}
                aria-label={searchText ? "Clear search" : "Submit search"}
            >
                {searchText ? <RiCloseLargeFill size={20} /> : <RiSearchLine size={20} />}
            </button>

        </form>
    );
};

export default SearchBar;
