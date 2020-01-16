import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'Over the Rainbow', id: 1},
    {title: 'What I did write', id: 2},
    {title: 'Unclothed Man in 35th Century', id: 3},
    {title: 'The Sentry', id: 4}
  ])
  return ( 
    <BookContext.Provider value={{books}} >
      {props.children}
    </BookContext.Provider> 
   );
}
 
export default BookContextProvider;