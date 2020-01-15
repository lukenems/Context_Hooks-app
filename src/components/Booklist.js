import React, { Component } from "react";
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
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
}

export default BookList;