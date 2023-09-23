import "./App.css";
import AlbumList from "./Components/AlbumList";
import { albumCollection } from "./data";

function App() {
  return (
    <div className="App">
      <AlbumList albums={albumCollection} />
    </div>
  );
}

export default App;
