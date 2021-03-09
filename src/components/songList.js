import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import SongItem from './songItem';

const StyledList = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: 10px;
    overflow: hidden;

    // The srcollbar is made visible when hover
    &:hover {
        overflow: auto;
    }

    // Styles for the scrollbar
    ::-webkit-scrollbar {
    width: 7px;
    }
    ::-webkit-scrollbar-track {
    background: #888; 
    }
    ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(#707, #a0a, #707);
    }
    ::-webkit-scrollbar-thumb:hover {
        background-image: linear-gradient(#909, #c0c, #909);
    }
`
// The songs array is mapped in a group of SongListItems
function SongList({ songs })  {
    return (
        <StyledList>
            {songs.map((song) => <SongItem song={song} key={song.id} />)}
        </StyledList>
    )
}

SongItem.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        explicit: PropTypes.bool,
        author: PropTypes.string,
        album: PropTypes.string,
        duration: PropTypes.instanceOf(Date),
        like: PropTypes.bool
    }))
}

SongList.defaultProps = {
    songs: [{}]
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs.songsList
    }
}

export default connect(mapStateToProps)(SongList);