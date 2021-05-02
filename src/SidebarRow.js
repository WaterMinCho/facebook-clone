import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
  // 이미지소스, 아이콘, 제목을 가져온다.
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {/* src props를 전달하면 src로 사용되는 Avatar를 렌더링한다.*/}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
