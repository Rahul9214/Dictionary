import { useState } from "react";
import "./App.css";

  // Initialize dictionary state with provided array
  const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];
  
  function XDictionary() {
    // State to store the search term and search result
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');
  
    // Function to handle search
    const handleSearch = () => {
      // Convert search term to lowercase for case-insensitive search
      const searchTermLower = searchTerm.toLowerCase();
  
      // Find the word in the dictionary
      const foundWord = initialDictionary.find(
        entry => entry.word.toLowerCase() === searchTermLower
      );
  
      if (foundWord) {
        // Word found, display its meaning
        setSearchResult(
          <div className="searchDefinition">
            <strong>Definition:</strong>
            <br />
            {foundWord.meaning}
          </div>
        );
      } else {
        // Word not found
        setSearchResult('Word not found in the dictionary.');
      }
    };
  
    return (
      <div className="dictionary-app">
        <h1>Dictionary App</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="search-result">
           {searchResult}
        </div>
      </div>
    );
  }
  
  export default XDictionary;