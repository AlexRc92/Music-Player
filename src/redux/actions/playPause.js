export const type = "PLAY_STOP";

const playStop = value => {
    return {
        type,
        payload: value
    };
};

export default playStop;