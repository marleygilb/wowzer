// The interfaces inferred from the shape of the data returned by the API

export interface WowVideoMetadata {
    audio: string;
    character: string;
    current_wow_in_movie: number;
    director: string;
    full_line: string;
    movie: string;
    movie_duration: string;
    Poster: string;
    release_date: string;
    timestamp: string;
    total_wows_in_movie: number;
}

export interface WoWVideoResolutions {
    '1080p': string;
    '720p': string;
    '480p': string;
    '360p': string;
}


