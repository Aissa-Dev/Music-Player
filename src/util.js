export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    let playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      // playPromise.then((audio) => {
      //   audioRef.current.play();
      // });
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
          audioRef.current.play();
        })
        .catch((error) => {
          console.log("playback prevented");
        });
    }
  }
};
