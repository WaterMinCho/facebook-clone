import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.interview365.com/news/photo/201810/82125_86495_4021.jpg"
        profileSrc="http://www.bokjitimes.com/news/photo/202002/22767_15736_3416.jpg"
        title="공유짱"
      />
      <Story
        image="https://img.hankyung.com/photo/201904/03.19370211.1.jpg"
        profileSrc="https://img.hankyung.com/photo/201811/01.18271154.1.jpg"
        title="마블리"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/7/7d/IU_MelOn_Music_Awards_2017_06.jpg"
        profileSrc="https://lh3.googleusercontent.com/proxy/mccNmil7x8RygUlU21YPedG_mk8g6heVITYRAllDsdu8L7Eh1Y-ylFbAJRuusPxmXEW00g0s1Sv7zzpjKxEElndZxM09pHVmByIkhzgBAYgATd2lrX_8gTOJpkY-NTokkg3lAW5PKw3KzE6GpGmpADNyMQC2NKaMlWNwlbVncvvnUchrxVDD"
        title="IU"
      />
      <Story
        image="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-0/p600x600/90650448_101990934791660_2801544739831152640_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=OMVzzB_o7ZoAX-mIeEk&_nc_ht=scontent-ssn1-1.xx&tp=6&oh=30a51dc7b07708a32d1b445e830a29ad&oe=60B8F23B"
        profileSrc="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/90745644_101991074791646_863683821185269760_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=1SwJ_mVaGb8AX_C2AlD&_nc_ht=scontent-ssn1-1.xx&oh=6c5807d83db204247433e12c5c4fd31e&oe=60B6FDCC"
        title="신예은"
      />
      <Story
        image="https://post-phinf.pstatic.net/MjAyMDAzMDRfMjQ3/MDAxNTgzMjg3ODc5MDA5.JsQiNc5bYcT_Z9vKyRrZ7NtHvtr9RWM2qURxfWL2ChMg.oy1_UcGPaaNYGok0BpJzQd5zBBOuubrqiNjSHYkuQDcg.JPEG/70144044_384626502209424_7095495734122999677_n.jpg?type=w1200"
        profileSrc="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7gr53%2FbtqI67iQBp5%2FapC9OzX7yMyR0SJ0eZL3bK%2Fimg.jpg"
        title="'그'선호"
      />
    </div>
  );
}

export default StoryReel;
