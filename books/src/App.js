import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    /**
     * second argument is [] = Called after first render, never called again
     * second argument is -  = Called after first render, also called after every renender
     * second argument is counter = Called after first render, also called after renenders if 'counter' variable changed
     */
    useEffect(() => {
        fetchBooks();
    }, [])

    const fetchBooks = async () => {
        const { data } = await axios.get('http://localhost:3001/books');
        setBooks(data);
    }

    const createBook = async (title) => {
        const { data } = await axios.post('http://localhost:3001/books',{title});
        
        const updatedBooks = [
            ...books, 
            data
        ];

        setBooks(updatedBooks);
    } 

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){ 
                return {...book, title: newTitle};
            }

            return book;
        });

        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList 
                books={books} 
                onDelete={ deleteBookById } 
                onEdit={ editBookById }
            />
            <BookCreate 
                onCreate={ createBook }
            />  
        </div>
    );
}


export default App;