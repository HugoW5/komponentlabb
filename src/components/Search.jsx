import { useState } from "react";

function Search() {
  const [input, setInput] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="button"
        value="Search"
        onClick={(e) => {
          alert(`You searched for ${input}`);
        }}
      />
    </div>
  );
}

export default Search;
