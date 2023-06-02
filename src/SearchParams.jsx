import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
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
      </form>
    </div>
  );
};

export default SearchParams;
