import React from "react";
import { useState } from "react";
import bookService from "../services/bookService";

function AddBook() {
  const [title, setTitle] = useState("");
  const [available, setAvailable] = useState("");
  const [author, setAuthor] = useState("");
  const [msg, setMsg] = useState("");
  const addBook = async (e) => {
    e.preventDefault();
    setMsg("Please wait");
    if (title === "" || author === "") {
      alert("required");
      return;
    }
    const newBook = {
      title,
      author,
      available,
    };
    try {
      await bookService.addBook(newBook);
      setMsg("success");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <form onSubmit={addBook}>
        <input
          className="form-control"
          type="text"
          placeholder="Book Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Book Auhtor"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Book Availablity"
          required
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        />
        <br />
        {msg}
        <input className="btn btn-success" type="submit" value="Add" />
        <input className="btn btn-warning" type="submit" value="Edit" />
      </form>
    </div>
  );
}

export default AddBook;
