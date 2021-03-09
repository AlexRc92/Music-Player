export const type = "PLAY_SONG";

export const selectSong = song => {
    return {
        type,
        payload: song
    };
};

export default selectSong;