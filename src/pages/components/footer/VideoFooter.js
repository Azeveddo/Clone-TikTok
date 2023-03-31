import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function videoFooter() {
  return (

    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Luciano Codes</h3>
        <p>Description video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Title music</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Vinil grande"
        src="https://cdn-icons-png.flaticon.com/512/96/96463.png"
      />
    </div>
  );
}

export default videoFooter;
