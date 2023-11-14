import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #1B1B1B;
    line-height: 2.0;
    text-align: justify;

    h1 {
        text-align: center;
        color: #476C5E;
        padding-bottom: 20px;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
        text-align: justify;
        font-size: 12px;
        
        p {
            padding-top: 10px;
        }

        @media screen and (min-width: 480px) {
            text-align: justify;
            width: 470px;
        }
    }
`;