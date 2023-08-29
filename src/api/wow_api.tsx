import { WowApiData } from "../types/wow_api.types";

// Returns a random clip of Owen Wilson saying "Wow" retrieved from the API

const getRandomWowClip = async (): Promise<WowApiData | undefined> => {
  try {
    const response = await fetch(
      "https://owen-wilson-wow-api.onrender.com/wows/random"
    );
    const clips: WowApiData[] = await response.json();
    return clips.shift();
  } catch (error) {
    console.error("Something went wrong...");
  }
};

export default getRandomWowClip;
