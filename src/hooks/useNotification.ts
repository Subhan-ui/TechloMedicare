import { useRef } from "react";

const useNotification = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playSound = () => {
    audioRef.current?.play();
  };
  return { audioRef, playSound };
};

export default useNotification;
