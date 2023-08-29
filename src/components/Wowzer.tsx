import React, { useState, useEffect } from "react";
import { WowClip } from "./WowClip";
import getRandomWowClip from "../api/wow_api";
import { WowApiData } from "../types/wow_api.types";
import "../styles/Wowzer.css";
import useWasm from "../hooks/useWasm";

const Wowzer = (): JSX.Element => {
  const ERROR_TEXT = "Something went wrong... Please refresh.";

  const [clip, setClip] = useState<WowApiData | undefined>(undefined);
  const [loadWow, setLoadWow] = useState(false);
  const [error, setError] = useState(false);

  const wasm = useWasm();

  // Access the API if 'wow' was typed and get a wow clip to store on the state
  useEffect(() => {
    const getClip = async () => {
      const clip = await getRandomWowClip();
      return clip;
    };
    if (loadWow) {
      getClip().then((clip) => {
        if (clip && clip.video) {
          setClip(clip);
        } else {
          setError(true);
        }
      });
      setLoadWow(false);
    }
  }, [loadWow]);

  // When user input changes, check if wow was typed
  // Uses WebAssembly module to call C++ function 'checkForWow'
  const handleChange = async (text: string) => {
    if (!wasm) {
      setError(true);
    } else {
      if (wasm.checkForWow(text.toLowerCase())) {
        setLoadWow(true);
      }
    }
  };

  return (
    <div>
      {error && <p className="wowzer__error-text">{ERROR_TEXT}</p>}
      <textarea
        className={"wowzer__textarea"}
        rows={5}
        cols={80}
        onChange={(e) => handleChange(e.target.value)}
        disabled={error ? true : false}
      ></textarea>
      {clip && <WowClip video={clip.video} />}
    </div>
  );
};

export default Wowzer;
