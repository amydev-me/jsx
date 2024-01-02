import { useState } from 'react';
function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    handleSubmit = () => {  
        onSubmit('cars');
    }

    return (
        <div> 
            <input />
            <button onClick={handleSubmit}></button>
        </div>
    );
}

export default SearchBar;