// ! obsolete

// import { useState } from "react";
import FilterRow from "../components/filterRow";

import React, { useState } from "react";

// ---- Date Picker Module ----
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default function Filter(params) {
  // const [filter, setFilter] = useState({});
  const [location, setLocation] = useState(new Set());
  const [time, setTime] = useState(new Date());
  const [minPrice, setMinPrice] = useState(0.00); // ! should fetch min and max from db
  const [maxPrice, setMaxPrice] = useState(15.00);
  const [quantity, setQuantity] = useState(1);

  // helper func to stub
  function logValue() {
    console.log(location, time, minPrice, maxPrice, quantity);
  }

  function createPlaceRow(options) {
    function handleLocationChange(event) {
      const value = event.target.value
      if (event.target.checked === true) {
        setLocation((prevLocation) => new Set([...prevLocation, value]));
      } else {
        const newLocation = new Set(location);
        newLocation.delete(value);
        setLocation(newLocation);
      }
    }
    return (
      <div>
        <div>Place: </div>
        <div>
          {options.map((op) => {
            return (
              <div key={op}>
                <input type="checkbox" value={op} onClick={event => handleLocationChange(event)}/>
                <label htmlFor={op}>{op}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function createTimeRow() {
    return (
      <div>
        <div>Time: </div>
        <DatePicker 
          selected={time} 
          onChange={(time) => setTime(time)} 
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
        />
      </div>
    );
  }

  function createPriceRow() {
    function handleMin(event){
      const inputValue = event.target.value;
      const intValue = parseFloat(inputValue);
      // Check if input value is a valid integer
      if (inputValue[0] !== '-' && 
        /^[0-9]+\.{0,1}[0-9]{0,2}$/.test(inputValue) && 
        intValue <= maxPrice) {
        // Input value is a non-negative integer
        setMinPrice(intValue);
      } else {
        // Input value is not a valid positive integer, reject it
        event.preventDefault();
      }
    }
    function handleMax(event){
      const inputValue = event.target.value;
      const intValue = parseFloat(inputValue);
      // Check if input value is a valid integer
      if (inputValue[0] !== '-' && 
        /^[0-9]+\.{0,1}[0-9]{0,2}$/.test(inputValue) && 
        intValue >= minPrice) {
        // Input value is a non-negative integer
        setMaxPrice(intValue);
      } else {
        // Input value is not a valid positive integer, reject it
        event.preventDefault();
      }
    }
    return (
      <div>
        PRICE:
        <input type="number" placeholder="Min" value={minPrice} onChange={handleMin}></input>
        {/* - */}
        TO
        <input type="number" placeholder="Max" value={maxPrice} onChange={handleMax}></input>
      </div>
    );
  }

  function createQuantityRow() {
    function handleQuantityChange(event) {
      const inputValue = event.target.value;
      const intValue = parseInt(inputValue);
  
      // Check if input value is a valid integer
      if (inputValue[0] !== '-' && 
        intValue > 0 && 
        /^[0-9]+$/.test(inputValue)) {
        // Input value is a non-negative integer
        setQuantity(intValue);
      } else {
        // Input value is not a valid positive integer, reject it
        event.preventDefault();
      }
    }
    return (
      <div>
        Quantity:
        <input 
          type="number" value={quantity} onChange={handleQuantityChange}
        />
      </div>
    );
  }

  return (
    <div>
      {createPlaceRow(DININGLOCATIONS, setLocation)}
      {createTimeRow()}
      {createPriceRow()}
      {createQuantityRow()}
      {/* <input type="submit" value="Apply Filter"/> */}
      <button onClick={logValue}>submit</button>
    </div>
  );
}

const DININGLOCATIONS = [
  "Bruin Bowl",
  "Bruin Cafe",
  "Bruin Plate",
  "Café 1919",
  "De Neve",
  "Epicuria at Ackerman",
  "Epicuria at Covel",
  "FEAST at Rieber",
  "Rendezvous",
  "The Drey",
  "The Study at Hendrick",
];
