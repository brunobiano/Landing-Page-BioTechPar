import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    p {
        display: flex;
        align-items: top;
        line-height: 1.5;
    };

    img {
        margin-right: 10px;
    }

    .rotate-effect {
     transition: transform 0.1s;   
    }

    .rotate-effect:hover {
        transform: rotate(20deg);
    }
`;