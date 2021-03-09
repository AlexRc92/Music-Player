const defaultPlaying = false;

function playReducer(state = defaultPlaying, { type, payload }) {
    switch (type) {
        case 'PLAY_STOP':
            console.log("Playing status set to: "+ payload)
            return payload;
        default:
            return state;
    }
}

export default playReducer