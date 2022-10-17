import React from "react";

function Filter() {
  return (
    <div className="filter">
      <div className="filterdropdown">
        <select>
          <option>Category</option>
          <option>Category1</option>
          <option>Category2</option>
          <option>Category3</option>
          <option>Category4</option>
        </select>
        <select>
          <option>Type</option>
          <option>Type1</option>
          <option>Type2</option>
          <option>Type3</option>
          <option>Type4</option>
        </select>
        <select>
          <option>Size</option>
          <option>XXL</option>
          <option>XL</option>
          <option>L</option>
          <option>M</option>
        </select>
        <select>
          <option>Colour</option>
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Black</option>
        </select>
      </div>
      <div className="filterbyprice">
        <h3>Filter by Price</h3>
        0<input type="range" name="vol" min="0" max="50" />
        1000
      </div>

      <div className="filterbygenre">
        <h3>Filter by Genre</h3>
        <input type="checkbox" id="html" />
        <label for="html">History</label>
        <br />
        <input type="checkbox" id="css" />
        <label for="css">Horror-Thriller</label>
        <br />
        <input type="checkbox" id="javascript" />
        <label for="javascript">Love Stories</label>
        <br />
        <input type="checkbox" id="react" />
        <label for="react">Science fiction</label>
        <br />
        <input type="checkbox" id="vue" />
        <label for="vue">Adventure</label>
      </div>
      <div className="filterbybrand">
        <h3>Filter by Brand</h3>
        <input type="checkbox" id="html" />
        <label for="html">Green Publications</label>
        <br />
        <input type="checkbox" id="css" />
        <label for="css">Red Publications</label>
        <br />
        <input type="checkbox" id="javascript" />
        <label for="javascript">Blue Publications</label>
        <br />
        <input type="checkbox" id="react" />
        <label for="react">Aaaz Publications</label>
        <br />
        <input type="checkbox" id="vue" />
        <label for="vue">Break Publications</label>
      </div>
    </div>
  );
}

export default Filter;
