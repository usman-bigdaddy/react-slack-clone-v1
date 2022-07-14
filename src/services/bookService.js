import db from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionef = collection(db, "books");
class BookService {
  addBook = (newBook) => {
    return addDoc(bookCollectionef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
  };
  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };
  getAllBooks = () => {
    return getDocs(bookCollectionef);
  };
  getActualBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

export default new BookService();
