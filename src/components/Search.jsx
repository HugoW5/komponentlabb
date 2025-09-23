import { useState } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = async () => {
    if (!input) {
      return;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&type=movie&s=${input}
        `
    );
    const data = await response.json();

    if(data.search){
        onSearch(data.search);
    }else{
        onSearch([]);
    }
  };

  return (
    
    <div className="search-box">
      <input
        type="text"
        value={input}
        placeholder="Search for a movie..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="button"
        value="Search"
        onClick={handleSearch}
      />
    </div>
  );
}

export default Search;
