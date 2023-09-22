import styled from "styled-components";

interface ScrollImageProps {
    isHovered: boolean;
}

export const Container = styled.div<ScrollImageProps>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: width 0.5s ease-in-out, transform 0.3s ease-in-out;
    width: ${(props) => (props.isHovered ? '250px' : '50px')};
    zIndex: 9999;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
    }

    .text {
        display: none;
        opacity: ${(props) => (props.isHovered ? '1' : '0')};
        transform: ${(props) => (props.isHovered ? 'scale(1)' : 'scale(0)')};
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    &:hover {
        .text {
            display: block;
            opacity: 1;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        display: none;
    }
`;
//transform: ${(props) => (props.isHovered ? 'scale(1.2)' : 'scale(1)')};