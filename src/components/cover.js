import React from 'react';
import { connect } from 'react-redux';
import { play, setFavorite } from '../redux/actions';
import PropTypes from 'prop-types';

import { ReactComponent as Play } from '../icons/play.svg'
import { ReactComponent as Pause } from '../icons/pause.svg'
import Emoji from './emoji'

import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props => props.theme.primaryColor};
    color: white;
    border-radius: 25px;
    width: 150px;
    height: 50px;
    font-size: 20px;
    outline: none;

    &:hover {
        background-color: ${props => props.theme.secondaryColor};
        width: 155px;
        height: 55px;
    }
`

const StyledCover =styled.div`
    width: 30%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledOverlay =styled.div`
    position: relative;
    width: 80%;
    
    img {
        opacity: ${props => props.playing ? 0.5 : 1};
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }

    div {
        transition: .5s ease;
        opacity: ${props => props.playing ? 1 : 0};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    &:hover {
        >img {
            opacity: 0.5;
        }
        >div {
            opacity: 1;
        }
    }
`
const StyledLikeButton = styled.button`
    background: none;
    border: none;
    color: white;
    &:focus {
        outline: none;
    }
`

function Cover({ songsNumber, playing, playStop, selectedSongId, likedSong, likeSong })  {
    return (
        <StyledCover>
            <StyledOverlay playing={playing} onClick={() => playStop(!playing)}>
                <img src="cover.jpg" alt="cover"/>
                <div>
                    {playing ? <Pause /> : <Play />}
                </div>
            </StyledOverlay>
            <h3>Your Time Capsule</h3>
            <StyledButton onClick={() => playStop(!playing)}>
                {playing ? 'PAUSE' : 'PLAY'}
            </StyledButton>
            <p>
                {songsNumber} SONGS
            </p>
            <StyledLikeButton onClick={() => likeSong({ id: selectedSongId, value: !likedSong})}>
                <Emoji name={likedSong ? 'heart' : 'heart-empty'} />
            </StyledLikeButton>
        </StyledCover>
    )
}

Cover.propTypes = {
    songsNumber: PropTypes.number.isRequired,
    playing: PropTypes.bool.isRequired,
    playStop: PropTypes.func.isRequired,
    likedSong: PropTypes.bool.isRequired,
    selectedSongId: PropTypes.number.isRequired,
    likeSong: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
        songsNumber: state.songs.songsList.length,
        likedSong: state.songs.selectedSong.like,
        selectedSongId: state.songs.selectedSong.id
    }
}

export default connect(mapStateToProps, {
    playStop: play,
    likeSong: setFavorite
})(Cover);