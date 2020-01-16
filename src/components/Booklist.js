import React, { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const currentTheme = isLightTheme ? light : dark;
  return ( 
    <div className="book-list" style={{ background: currentTheme.bg, color: currentTheme.syntax }}>
    <ul>
      <li style={{ background: currentTheme.ui }}>the way of kings</li>
      <li style={{ background: currentTheme.ui }}>the name of the wind</li>
     <li style={{ background: currentTheme.ui }}>lord of the rings</li>
   </ul>
  </div> 
  );
}
 
export default BookList;