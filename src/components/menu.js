import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Emoji from './emoji';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 8px;
    min-width: 225px;

    * {
        float: right;
    }
`
const StyledButton = styled.button`
    background: none;
    border: none;
    &:focus {
        outline: none;
    }
`

const StyledMenu = styled.ul`
    display: ${props => props.open ? 'grid' : 'none'};
    min-width: 205px;
    padding-inline-start: 10px;
    list-style: none;
    background-color: darkgray;
    border-color: #707;
    z-index: 2;
    color: white;
    border-radius: 6px;

    li:hover {
        display: block;
        background-color: black;
    }
`

const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
        document.removeEventListener("click", handleClick);
        };
    });
};


function EllipsisMenu() {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    
    useOutsideClick(ref, () => {
        setOpen(false);
    });

    return (
        <StyledContainer>
            <StyledButton onClick={() => {setOpen(!open)}}>
                <Emoji name='ellipsis' />
            </StyledButton>        
            <StyledMenu ref={ref} open={open}>
                <li>Start Radio</li>
                <li>Save to your Favorite Songs</li>
                <li>Add to Queue</li>
                <li>Add to Playlist</li>
                <li>Copy Song Link</li>
            </StyledMenu>
        </StyledContainer>
    )
}

export default EllipsisMenu;