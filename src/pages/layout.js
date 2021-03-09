import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Cover from '../components/cover';
import SongList from '../components/songList';

const StyledLayout = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
`
//This structure will be our main pageXOffset.
function Layout()  {
    return (
        <StyledLayout>
            <Cover songsNumber={51} />
            <SongList />
        </StyledLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
        selectedSong: state.songs.selectedSong.id
    }
}

export default connect(mapStateToProps)(Layout);