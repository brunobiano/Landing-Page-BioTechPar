import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 75px;
    zIndex: 9999;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    img:hover {
        transform: scale(1.2);
    }

    img {
        width: 75px;
        height: 75px;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        display: none;
    }
`;