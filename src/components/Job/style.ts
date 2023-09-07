import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
`;

export const Title = styled.div`
    margin-bottom: 30px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 30px;
    font-size: 16px;
    ul {
        list-style-type: square;
    }
`;