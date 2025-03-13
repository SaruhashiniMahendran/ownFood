import { useEffect, useState } from "react";

const SearchBar = (data) => {
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState(data.data);
  const [listOFRes, setListOFRes] = useState(data.data);
  // console.log(searchText);
  useEffect(() => {}, []);
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for food..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      <button
        className="search-button"
        onClick={() => {
          const filterList = listOFRes.filter((res) => {
            return res.name.toLowerCase().includes(searchText.toLowerCase());
          });
          console.log("listOFRes", listOFRes);
          setFilterList(filterList);
          console.log("FilterList", filterList);
        }}>
        Search
      </button>
    </div>
  );
};
export default SearchBar;
