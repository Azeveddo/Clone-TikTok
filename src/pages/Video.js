import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";

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
        src="https://webapp-va.tiktok.com/199b33fd4b20c1f21f28843e1230bfb7/64269056/tos-useast2a-ve-0068c002/o0DViGoMBZGpX5nIBQbse2AJgvQveDKYBjJkdC?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C0%7C0&br=2178&bt=1089&cs=0&ds=3&ft=Ap6JtBiTq8Zmoe7hCc_vjNpoKAhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKWZzZXpoaGRmNjkzM2c6NTc6NTtpZjQ0aEBpM3E3bzM6ZnA2ajMzNzgzM0BTbGt2aXFEOmpoXitiK2p0OiMvY2NiNi8vNi4xMTNhXjVjYSNvNTNxcjQwa2dgLS1kLzZzcw%3D%3D&l=20230331014825E121F05BFC11D50509F0&btag=80000&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNzIxNjQ4NTQzOTEwNDMzNjkwMSJ9"
      ></video>
      <VideoFooter/>
    </div>
  );
}
export default Video;
