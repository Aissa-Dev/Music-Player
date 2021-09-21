import React from "react";

const LibrarySong = ({ song, setCurrentSong, songs }) => {
  const selectSongHandler = () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    console.log(selectedSong[0]);
    setCurrentSong(selectedSong[0]);
  };
  return (
    <div className="library-song" onClick={selectSongHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
