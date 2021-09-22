import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({
  currentSong,
  songs,
  isPlaying,
  setIsplaying,
  audioRef,
  songInfo,
  setSongInfo,
  setCurrentSong,
  setSongs
}) => {
  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
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
  }, [currentSong]);
  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsplaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsplaying(!isPlaying);
    }
    audioRef.current.volume = 0.05;
  };

  const formatingTime = (seconds) => {
    const format = (val) => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;
    return [minutes, seconds % 60].map(format).join(":");
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => {
      return song.id === currentSong.id;
    });
    console.log("index : ", currentIndex);

    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      if (currentIndex === 0) {
        currentIndex = songs.length;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying, audioRef);
  };
  //Add styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  };
  console.log(currentSong.color[0]);
  console.log(currentSong.color[1]);
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatingTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? formatingTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipTrackHandler("skip-back")}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipTrackHandler("skip-forward")}
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
