import update from 'react-addons-update';

const songsList = [
    {
        id: 0,
        name: "Danny Don't You KNow",
        explicit: false,
        author: "Ninja Sex Party",
        album: "Cool Patrol",
        duration: new Date(0, 0, 0, 0, 2, 29),
        like: false
    },
    {
        id: 1,
        name: "Bfg Division",
        explicit: false,
        author: "Mick Gordon",
        album: "Doom (Original Game Soundtrack)",
        duration: new Date(0, 0, 0, 0, 3, 27),
        like: false
    },
    {
        id: 2,
        name: "Mansion Party",
        explicit: true,
        author: "Ninja Sex Party",
        album: "Cool Patrol",
        duration: new Date(0, 0, 0, 0, 4, 35),
        like: true
    },
    {
        id: 3,
        name: "The Future",
        explicit: true,
        author: "Mistery Skulls",
        album: "Forever",
        duration: new Date(0, 0, 0, 0, 3, 42),
        like: true
    },
    {
        id: 4,
        name: "Let's Go",
        explicit: false,
        author: "JAXSON GAMBLE",
        album: "Let's Go",
        duration: new Date(0, 0, 0, 0, 2, 38),
        like: false
    },
    {
        id: 5,
        name: "Want It All",
        explicit: false,
        author: "JAXSON GAMBLE",
        album: "Want It All",
        duration: new Date(0, 0, 0, 0, 2, 57),
        like: false
    },
    {
        id: 6,
        name: "Iconic",
        explicit: false,
        author: "JAXSON GAMBLE",
        album: "Casual Anarchy",
        duration: new Date(0, 0, 0, 0, 3, 15),
        like: true
    },
    {
        id: 7,
        name: "Addict",
        explicit: true,
        author: "Silva Hound, Michael Kovach",
        album: "Addict",
        duration: new Date(0, 0, 0, 0, 3, 26),
        like: false
    },
    {
        id: 8,
        name: "Kingdom",
        explicit: false,
        author: "JAXSON GAMBLE",
        album: "Kingdom",
        duration: new Date(0, 0, 0, 0, 2, 37),
        like: true
    },
    {
        id: 9,
        name: "Get Jinxed",
        explicit: false,
        author: "League of Legends",
        album: "The Music of League of Legends Vol. 1",
        duration: new Date(0, 0, 0, 0, 5, 58),
        like: false
    },
    {
        id: 10,
        name: "I'm Not Okay (I Promise)",
        explicit: true,
        author: "My Chemical Romance",
        album: "The Cheers for Sweet Revenge",
        duration: new Date(0, 0, 0, 0, 2, 61),
        like: true
    },
    {
        id: 11,
        name: "Sorry Jack",
        explicit: true,
        author: "Scratch21",
        album: "Scratch21",
        duration: new Date(0, 0, 0, 0, 2, 43),
        like: true
    },
    {
        id: 12,
        name: "Explode",
        explicit: false,
        author: "Written By Wolves",
        album: "Explode", duration: new Date(0, 0, 0, 0, 1, 51),
        like: false
    },
    {
        id: 13,
        name: "Infected",
        explicit: false,
        author: "Eyes Set To Kill",
        album: "Masks",
        duration: new Date(0, 0, 0, 0, 2, 33),
        like: true
    },
    {
        id: 14,
        name: "Can You Feel My Heart",
        explicit: true,
        author: "Bring Me The Horizon",
        album: "Sempiternal",
        duration: new Date(0, 0, 0, 0, 2, 32),
        like: false
    },
];
const defaultSelectedSong = songsList[0];

const defaultState = {
    songsList,
    selectedSong: defaultSelectedSong
}

export const songs = (state = defaultState, { type, payload }) => {
    switch (type) {
        case 'FAVORITE_SONG':
            console.log("Song id " + payload.id + " favorite set to: "+ payload.value)
            return update(state, {
                songsList: {
                    [payload.id]: {
                        like: {$set: payload.value}
                    }
                },
                selectedSong: {
                    like: {$set: payload.value}
                }
            });
        case 'PLAY_SONG':
            console.log("Selected song:", payload)
            return update(state, {
                selectedSong: {$set: payload}
            });
        default:
            return state;
    }
};

export default songs;