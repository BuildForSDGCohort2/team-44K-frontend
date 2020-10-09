import React from 'react';
import '../bootstrap.css';
import * as Icon from "react-bootstrap-icons";

function SearchBar() {
    return (
      <div>
        <form className="form-group">
          <label htmlFor="search">Enter your search term ...</label>  
          <br />
          <div className=" input-group">
          <input type="text" placeholder=" Search ..." className="form-control" />{" "}
          <span className=" input-group-addon">
          <button className="btn btn-md">
            <Icon.Search color="purple" size={30} />
          </button>
          </span>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;
