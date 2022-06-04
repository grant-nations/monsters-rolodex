import React, {ChangeEventHandler} from "react";
import "./SearchBox.css";

type SearchBoxProps = {
    placeholder?: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBox = ({placeholder, handleChange} : SearchBoxProps) => {
    return <input
        type="search"
        className={"search"}
        placeholder={placeholder}
        onChange={handleChange}
    />
}
