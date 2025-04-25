import React from 'react';
import {useState} from 'react';
import DateTimePicker from 'react-datetime-picker';

function ActivityType() {
  const [selectedOption, setSelectedOption] = useState("Meal");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return(
    <div>
      <label>
        Select activity type:
          <select value={selectedOption} onChange = {handleDropdownChange}>
            <option value = "Meal">Meal</option>
            <option value = "Water">Water</option>
            <option value = "Nap">Nap</option>
            <option value = "Play">Play</option>
          </select>
      </label>
      <p>Activity Type: {selectedOption}</p>
    </div>
  )
}

function TimeEntry() {
  const [value, setValue] = useState(new Date());

  return(
    <div>
      <label> Input date and time: </label>
      <DateTimePicker onChange={setValue} value={value} />
      <p>DateTime: {value.toLocaleString()}</p>
    </div>
  )
}

function SubmitButton() {
  return <button>Submit</button>;
}

function DataEntryForm() {
  return(
    <div>
      <ActivityType />
      <TimeEntry />
      <SubmitButton />
    </div>
  )
}

export default DataEntryForm;
