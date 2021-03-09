export const type = "FAVORITE_SONG";

const setFavorite = value => {
    return {
        type,
        payload: value
    };
};

export default setFavorite;