import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
        height: auto;
        padding-top: 0;
    }
`;

export const Title = styled.div`
    text-align: center;
    margin-top: -80px;
    margin-bottom: 80px;
    color: #476C5E;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        margin-top: -140px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: center;
    
    img {
        width: 700px;
        justify-content: center;
    }

    p {
        width: 700px;
        line-height: 2.0;
        font-size: 14px;
        padding-top: 50px;
        text-align: justify;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;

        img {
            width: 300px;
        }
        
        p {
            font-size: 12px;
            width: 90%;
            padding-top: 20px;
            text-align: justify;
        }
    }
`;