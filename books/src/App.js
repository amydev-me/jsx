import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books'; 

function App() {
    const { fetchBooks } = useContext(BooksContext);
    /**
     * second argument is []      = Called after first render, never called again
     * second argument is -       = Called after first render, also called after every renender
     * second argument is counter = Called after first render, also called after renenders if 'counter' variable changed
     */
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList  />
            <BookCreate />  
        </div>
    );
}


export default App;