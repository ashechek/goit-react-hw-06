import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter  } from "../../redux/store";

const SearchBox = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectNameFilter);
  
  const handleSearchInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const id = { useId };
  return (
    <div className={s.searchContainer}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        id={id}
        type="text"
        value={value}
        name="searchName"
        onChange={handleSearchInput}
      ></input>
    </div>
  );
};

export default SearchBox;
