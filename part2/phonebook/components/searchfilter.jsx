const SearchFilter = ({searchTerm, handleSearchChange}) => {
    return (
        <div>
            Filter show with <input value={searchTerm} onChange={handleSearchChange}/>
        </div>
    );
};

export default SearchFilter;