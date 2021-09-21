import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            songs={songs}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
