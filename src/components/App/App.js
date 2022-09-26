import "./App.css";
import "../Button/Button.css";
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <button
        onClick={function addLikes() {
          setLikes(likes + 1);
        }}
      >
        {likes} likes
      </button>
    </div>
  );
}

export default App;
