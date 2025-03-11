import { useEffect, useState } from "react";

type SearchBarProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  const [searchBarInputValue, setSearchBarInputValue] = useState("");

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchBarInputElement = e.target;
    setSearchBarInputValue(searchBarInputElement.value);
  };

  const handleSearchBarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchBarInputValue);
    setSearchBarInputValue("");
  };

  useEffect(() => {
    console.log("searchBarInputValue: ", searchBarInputValue);
  }, [searchBarInputValue]);

  return (
    <>
      <div>
        <form onSubmit={handleSearchBarSubmit}>
          <select name="" id="">
            <option value="All">All</option>
          </select>
          <label htmlFor="">
            <input
              type="text"
              value={searchBarInputValue}
              onChange={handleSearchBarChange}
            />
          </label>
          <button>🔎</button>
        </form>
      </div>
    </>
  );
};
