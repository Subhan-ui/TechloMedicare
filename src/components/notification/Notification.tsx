"use client";

import useNotification from "@/hooks/useNotification";

const NotificationSound = () => {
  const { audioRef } = useNotification();
  
  return (
    <>
      <audio
        ref={audioRef}
        src="/notification/notification.mp3"
        preload="auto"
      ></audio>
    </>
  );
};

export default NotificationSound;
