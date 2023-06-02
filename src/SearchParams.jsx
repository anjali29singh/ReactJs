import { useState, useEffect } from "react";
//useEffect is used to connect react component from external
//this is controlled by external system

const ANIMALS = ["dog", "cat", "rabbit", "bird", "panda"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            id="location"
            placeholder="location"
          ></input>
        </label>
        <button>Submit</button>

        <label htmlFor="animals">
          Animals
          <select
            id="animals"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return;
              <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
