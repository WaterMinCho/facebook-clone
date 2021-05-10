import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    //DB

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`당신의 생각을 적으세요.`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="이미지 URL"
          />
          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>라이브</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>사진/비디오</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>기분/활동</h3>
        </div>
      </div>
    </div>
  );
}
export default MessageSender;
