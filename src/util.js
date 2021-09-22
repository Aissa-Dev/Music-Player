export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    let playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
