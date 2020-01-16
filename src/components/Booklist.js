import React, { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { books } = useContext(BookContext);
  const currentTheme = isLightTheme ? light : dark;
  return ( 
    <div className="book-list" style={{ background: currentTheme.bg, color: currentTheme.syntax }}>
    <ul>
      {books.map(book => (
          <li style={{ background: currentTheme.ui}}>{book.title}</li>
        )
      )}
   </ul>
  </div> 
  );
}
 
export default BookList;