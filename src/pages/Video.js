import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://webapp-va.tiktok.com/ab40e5ddb17bc1b54b8e801ac8429b45/642673ab/tos-useast2a-ve-0068c004/oEPzfBc2hCLqMUemIQBzhttTJHJOkUAC5BoVQm?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C0%7C0&br=2150&bt=1075&cs=0&ds=6&ft=Ap6JtBiTq8Zmo~_LCc_vjq06PAhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKWZzZXpoaGRmODZkPDM8OzNmZmQ6ZThpNkBpamZsM2U6Zjw0ajMzNzgzM0BTbGt2aXFEOmpoXitiK2p0OiNjYV8uNC9jX2IxM15jMy8yYSNqZGdvcjRvcmdgLS1kLzZzcw%3D%3D&l=202303302346053DE17FDAE5A3A3745D9F&btag=80000&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNzIxNjQ4NTQzOTEwNDMzNjkwMSJ9"
      ></video>
    </div>
  );
}
export default Video;
