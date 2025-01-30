import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SearchItems = () => {
  const [sort, setSort] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <>
      <div className="item">
        <label>Sort by : </label>
        <FormControl>
          <Select
            value={sort}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Alphabetically, A-Z</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="item">
        <p>Showing 1 - 12 of 26 result</p>
      </div>

      <div className="item">
        <label>Show : </label>
        <FormControl>
          <Select
            value={sort}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">4</MenuItem>
            <MenuItem value={10}>6</MenuItem>
            <MenuItem value={20}>8</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default SearchItems;
