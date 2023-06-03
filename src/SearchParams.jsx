import { useState, useEffect } from "react";
//useEffect is used to connect react component from external
//this is controlled by external system

const ANIMALS = ["dog", "cat", "rabbit", "bird", "panda"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  //useEffect(function,[dependencies]) //if not dependencies is given then useEffect is called when any time hook changes
  //which we don't want
  //useEffect is used to do somethings after render is done.
  //this will called anytime whenver a hook is changed
  /*useEffect(() => {
    console.log("anjali");
  });
 */

  useEffect(() => {
    console.log("useEffect is called after animal state is changed");
  }, [animal, location]);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
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
              e.preventDefault();
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
