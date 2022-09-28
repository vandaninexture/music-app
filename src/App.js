import React, { useRef, useState } from "react";
// import style from "../assets/css/components/audio.module.scss";
// import playAudioIcon from "../assets/images/home/svg/play_audio.svg";
// import pauseAudioIcon from "../assets/images/home/svg/pause_audio.svg";

import audioSource from "./bullpreme-theme-song.mp3";

const App = () => {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  const pauseAudio = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef} autoPlay allow="autoplay" controls loop style={{ display:"none" }}>
        <source src={audioSource} />
      </audio>

      {isPlaying ? (
        <button onClick={playAudio}>
          {/* <img src={playAudioIcon} alt="music-pause-icon" loading="lazy"/> */}
          pause
        </button>
      ) : (
        <button onClick={pauseAudio}>
          {/* <img src={pauseAudioIcon} alt="music-play-icon" loading="lazy" /> */}
          play
        </button>
      )}
    </div>
  );
};

export default App;
