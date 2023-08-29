import { WowVideos } from "../types/wow_api.types";
import "../styles/WowClip.css";

/* Defaulting to 360p for the web
    I was interested in determining how to serve different resolutions 
    based on things like screen size, device type, or network speed
    but decided to keep things simple.
  */
export const WowClip = ({ video }: WowVideos): JSX.Element => {
  const resolution = video["360p"];
  return (
    <video
      className={"wow-clip__video"}
      src={resolution}
      width="750"
      height="500"
      autoPlay
    ></video>
  );
};
