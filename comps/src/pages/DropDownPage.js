import DropDown from "../components/DropDown";
import { useState } from "react";

function DropDownPage() {
  const [selection, setSelection] = useState(null);
  
  const handleChange = (option) => {
    setSelection(option);
  }

  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'} 
  ];
  return (
    <div>
      <DropDown options={ options } value={selection} onChange={handleChange} />
    </div>
  );
}

export default DropDownPage;