import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatScreen from "./components/ChatScreen";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [bookId, setBookId] = useState("");
  // const getBookIdHandler = async (id) => {
  //   console.log(`The id is ${id}`);
  // };
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<h1>Hell0</h1>} />
              <Route path="/room/:roomId" element={<ChatScreen />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
