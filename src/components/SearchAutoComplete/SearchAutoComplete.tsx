import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchAutoComplete.css";

const SearchAutoComplete: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data));
  }, []);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length >= 2) {
      if (data.length > 0) {
        const filteredData = data.filter((item: any) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredData(filteredData);
      } else setFilteredData([]);
    }
  };
  const handleClick = (item: string) => {
    setInputValue(item);
    setFilteredData([]);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Search Auto Complete
      </h1>
      <div className="autocomplete-container">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => handleInput(e)}
          className="autocomplete-input"
        />
        {filteredData.length > 0 && (
          <ul className="autocomplete-suggestions">
            {filteredData.map((item: any, index: number) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => handleClick(item.title)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
