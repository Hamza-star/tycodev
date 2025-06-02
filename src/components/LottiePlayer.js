"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function LottiePlayer() {
  return (
    <Player
      autoplay
      loop
      src="/animations/about.json"
      style={{ height: 320, width: 320 }}
    />
  );
}
