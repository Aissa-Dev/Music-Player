import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./util";
import { useState } from "react";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[9]);
  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        setIsplaying={setIsplaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
