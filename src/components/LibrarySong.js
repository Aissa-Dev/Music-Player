import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs
}) => {
  const selectSongHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    await setCurrentSong(selectedSong[0]);

    //Add Active State
    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return {
          ...s,
          active: true
        };
      } else {
        return {
          ...s,
          active: false
        };
      }
    });

    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={selectSongHandler}
    >
      <img
        src={song.cover}
        alt={song.name}
        className={song.active & isPlaying ? "spining" : ""}
      />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
