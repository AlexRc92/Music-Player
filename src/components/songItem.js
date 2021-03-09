import React from 'react';
import { connect } from 'react-redux';
import { play, selectSong } from '../redux/actions';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { ReactComponent as Play } from '../icons/play.svg';
import { ReactComponent as Pause } from '../icons/pause.svg';
import { ReactComponent as Speaker } from '../icons/speaker.svg';
import Emoji from './emoji';
import Menu from './menu';

const StyledItem = styled.div`
    width: 100%;
    height: 95px;
    display: flex;
    padding-left: 30px;
    padding-top: 10px;
    color: ${props => props.selected ? props.theme.primaryColor : 'white'};
    background-color: ${props => props.selected && 'black'};

    * {
        margin-right: 10px;
    }

    #playIcon {
        display: none;
    }

    #title {
        width: 700px;
        height: 75%;
        h3, p {
            margin-top: 2px;
            margin-bottom: 2px;
        }
    }

    #meta {
        display: flex;
        color: white;
    }

    #explicit {
        max-height: 67px;
        color: black;
        margin-right: 0;
        background-color: white;
        border-radius: 3px;
    }

    .ellipsis {
        display: none;
        color: white;
    }

    #date {
        right: 20px;
        margin-bottom: 70px;
    }

    &:hover {
        background-color: black;
        color: ${props => props.theme.primaryColor};
        #soundIcon {
            display: none;
        }
        #playIcon {
            display: block;
        }
        .ellipsis {
            display: block;
        }
    }
`

function SongItem({ song, selectedSongId, playing, playStop, changeSong })  {
    return (
        <>
            <StyledItem selected={song.id===selectedSongId} onClick={() => {
                // The song is selected.
                changeSong(song);

                //  We verify if the click was made to the current playing song.
                if (song.id===selectedSongId && playing) {
                    playStop(false);
                } else {
                    playStop(true);
                }
            }}>
                <div id='soundIcon'>
                    {song.id === selectedSongId && playing ? <Speaker /> : <Emoji name='music' />}
                </div>
                <div id='playIcon'>
                    {song.id === selectedSongId && playing ? <Pause /> : <Play />}
                </div>
                <div id='title'>
                    <h3>{song.name}</h3>
                    <div id='meta'>
                        <p id='explicit'>{song.explicit && "EXPLICIT"}</p>
                        <p>{song.author} - {song.album}</p>
                    </div>
                </div>
                <Menu />
                <p id='date'>{song.duration.getMinutes()}:{song.duration.getSeconds()}</p>
            </StyledItem>
        </>
    )
}

SongItem.defaultProps = {
    song: {
        id: 1, 
        name: "Titulo",
        explicit: true,
        author: "Autor",
        album: "Album",
        duration: new Date(0, 0, 0, 0, 2, 30),
        like: false
    }
}

SongItem.propTypes = {
    song: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        explicit: PropTypes.bool,
        author: PropTypes.string,
        album: PropTypes.string,
        duration: PropTypes.instanceOf(Date),
        like: PropTypes.bool
    }),
    selectedSongId: PropTypes.number.isRequired,
    playing: PropTypes.bool.isRequired,
    playStop: PropTypes.func.isRequired,
    changeSong: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
        selectedSongId: state.songs.selectedSong.id
    }
}

export default connect(mapStateToProps, {
    playStop: play,
    changeSong: selectSong 
})(SongItem);