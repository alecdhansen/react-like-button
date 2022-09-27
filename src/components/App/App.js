import "./App.css";
import "../Button/Button.css";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function addLikes() {
    setLikes(likes + 1);
  }
  function addAnS() {
    if (likes === 1) {
      return "like";
    } else if (likes === 100) {
      return "likes, get a life";
    } else {
      return "likes";
    }
  }

  return (
    <div className="App">
      <button onClick={addLikes}>
        {likes} {addAnS()}
      </button>
    </div>
  );
}

export default App;
