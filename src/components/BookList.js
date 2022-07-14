import React, { useEffect, useState } from "react";
import bookService from "../services/bookService";
function BookList({ getBookId }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const books = await bookService.getAllBooks();
    setBooks(books.docs.map((book) => ({ ...book.data(), id: book.id })));
  };
  const deleteBook = async (id) => {
    await bookService.deleteBook(id);
    getBooks();
  };
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.author}</td>
              <td>{data.title}</td>
              <td>{data.available}</td>
              <td>
                <button
                  onClick={(e) => getBookId(data.id)}
                  type="button"
                  className="btn btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => deleteBook(data.id)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
