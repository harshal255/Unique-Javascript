import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

//TODO: Add a search by genre button or like a suggestions prompt
const Search = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [startIndex, setStartIndex] = useState(5);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&filter=partial`;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data.items;
      const bookData = data
        .filter((book) => book.accessInfo.embeddable)
        .filter(
          (book) =>
            book.volumeInfo.industryIdentifiers &&
            book.volumeInfo.industryIdentifiers[0].type === "ISBN_13"
        )
        .map((book) => {
          return {
            author: book.volumeInfo.authors[0],
            title: book.volumeInfo.title,
            isbn: book.volumeInfo.industryIdentifiers[0].identifier,
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
    setStartIndex(startIndex + 5);
    fetchData();
  };
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setStartIndex(0);
    setBooks([]); // Clearing the books array
  };

  return (
    <div className='flex flex-col justify-center items-center '>
            <form onSubmit={handleSubmit} autoComplete="bro">
            <div className='flex flex-row justify-center items-center mt-48' >
            <input value={searchQuery} onChange={handleSearchQueryChange} autoComplete='no' className=' lg:text-4xl md:text-3xl sm:text-2xl text-xl xl:w-[1200px] lg:w-[600px] md:w-[500px] sm:w-96 w-56 pl-6 py-3 border-black placeholder:text-black px-3 rounded-full border-4' placeholder='Search for books' type='text'></input>
            <div className="flex bg-black rounded-full  h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
            <button type="submit" className="font-bold  font-Lato text-xl transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 group-hover:text-black  group-hover:bg-white">Search</button>
            </div>
        </div>
      </form>
      <div>
        <h1 className="hover:scale-105 select-none mb-10 mt-16 font-Lato text-2xl lg:text-7xl md:text-5xl sm:text-5xl">
          Have a good read ⸂⸂⸜(രᴗര๑)⸝⸃⸃
        </h1>
      </div>
      <div className="flex justify-center flex-row flex-wrap gap-10">
        {books.map((book, index) => (
          <Link
            target="_blank"
            href={{
              pathname: `/preview/[isbn]`,
              query: { isbn: book.isbn },
            }}
          >
            <div
              key={index}
              className="contact-card basis-72 mb-5 shadow-md rounded-xl flex flex-col p-3 pb-[100px] bg-black w-[300px] h-[400px]"
            >
              <img
                className="w-full h-full self-center rounded-md object-cover "
                src={book.thumbnail}
                alt={`Thumbnail for ${book.title}`}
              />
              <h3 className="text-lg text-slate-50">{book.title}</h3>
              <div className="info-group flex items-center">
                <p className="text-md text-slate-500">{book.author}</p>
              </div>
            </div>
              </Link>
          ))}
          </div>
        {books.length > 0 && (
          <div  className="flex mb-8 bg-black rounded-full  h-16 self-center pr-[2px] pl-[4px] group hover:scale-105 hover:pb-1 cursor-pointer mx-1">
          <button onClick={handleLoadMore} className="font-bold font-Lato text-xl transition ease-in-out duration-100 bg-black rounded-full h-14 self-center text-white px-6 group-hover:text-black  group-hover:bg-white">Load More</button>
          </div>
        )}
      </div>
  );
};

export default Search;
