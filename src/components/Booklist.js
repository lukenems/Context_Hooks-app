import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>the way of kings</li>
          <li>the name of the wind</li>
          <li>lord of the rings</li>
        </ul>
      </div>
    );
  }
}

export default BookList;