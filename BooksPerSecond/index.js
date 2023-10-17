import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&filter=partial`;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data.items;
      const bookData = data
        .filter((book) => book.accessInfo.embeddable)
        .map((book) => {
          return {
            title: book.volumeInfo.title,
            isbn: book.volumeInfo.industryIdentifiers
              ? book.volumeInfo.industryIdentifiers[0].identifier
              : "N/A",
            thumbnail: book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "https://via.placeholder.com/150x200?text=No+Thumbnail",
          };
        });
      setBooks([...books, ...bookData]); //* appends to the existing array of books
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStartIndex(0);
    setBooks([]); // Clearing the books array
    fetchData();
  };

  const handleLoadMore = () => {
    setStartIndex(startIndex + 10);
    fetchData();
  };
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setStartIndex(0);
    setBooks([]); // Clearing the books array
  };

  return (
    <div>
      <h2>Book List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong>{" "}
            <Link
              href={{ pathname: `/preview/[isbn]`, query: { isbn: book.isbn } }}
            >
              {book.title}
            </Link>
            , <strong>ISBN:</strong> {book.isbn}
            <br />
            <img src={book.thumbnail} alt={`Thumbnail for ${book.title}`} />
          </li>
        ))}
      </ul>
      {books.length > 0 && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};
// todo : style load more button and add auto scroll to show the new stuff
export default BookList;
