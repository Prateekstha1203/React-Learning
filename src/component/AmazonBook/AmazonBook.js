import React from "react";
import "./AmazonBook.css";
import Books from "./Books";
import Book from "./Book";
const AmazonBook = () => {
  return (
    <React.Fragment>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {Books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default AmazonBook;
