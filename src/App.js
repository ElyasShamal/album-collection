import "./App.css";
import Album from "./Components/Album";
import { albumCollection } from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="title">Album Collection</h1>
      <div className="albums">
        <Album album={albumCollection[0]} />
        <Album album={albumCollection[1]} />
        <Album album={albumCollection[2]} />
        <Album album={albumCollection[3]} />
        <Album album={albumCollection[4]} />
        <Album album={albumCollection[5]} />
        <Album album={albumCollection[6]} />
        <Album album={albumCollection[7]} />
        <Album album={albumCollection[8]} />
      </div>
    </div>
  );
}

export default App;
