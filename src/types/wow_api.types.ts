import { WowVideoMetadata, WoWVideoResolutions } from "./wow_api.interface";

// Since I'm unsure if the API will always return all metadata, I've decided to make the attributes optional
type OptionalMetadata = { [P in keyof WowVideoMetadata]?: WowVideoMetadata[P] }

// However, since the app cannot function without at least one video clip, I have left them as required
export type WowVideos = { video: WoWVideoResolutions };

// Combines all api data into one type
export type WowApiData = OptionalMetadata & WowVideos;
