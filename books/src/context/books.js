import { createContext, useState } from "react";
import axios from 'axios'; 

const BooksContext = createContext();

function Provider({ children }) {
  const [ books, setBooks ] = useState([]);
 
  const fetchBooks = async () => {
    const { data } = await axios.get('http://localhost:3001/books');
    setBooks(data);
  };

  const createBook = async (title) => {
        const { data } = await axios.post('http://localhost:3001/books',{title});
        
        const updatedBooks = [
            ...books, 
            data
        ];

        setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
      await axios.delete(`http://localhost:3001/books/${id}`);

      const updatedBooks = books.filter((book) => {
          return book.id !== id;
      })

      setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
      const { data } = await axios.put(`http://localhost:3001/books/${id}`,{
          title: newTitle
      });
      
      const updatedBooks = books.map((book) => {
          if(book.id === id){ 
              return { ...book, ...data };
          }

          return book;
      });

      setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  };

  return <BooksContext.Provider value={ valueToShare }>
    { children }
  </BooksContext.Provider>
}

export { Provider };
export default BooksContext;