import { useState } from "react";

const App = () => {
  const initialDictionary = [
    {word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const foundWord = initialDictionary.find(
      (entry) => entry.word.toLowerCase() === lowercaseSearchTerm
    );

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="dictionary">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <br/>
      <h3>Definition:</h3>
      <div>{searchResult}</div>
    </div>
  );
};

export default App;