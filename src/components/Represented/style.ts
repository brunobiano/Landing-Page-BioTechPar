import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
`;

export const Title = styled.div`
    text-align: center;
    margin-top: -80px;
    margin-bottom: 80px;
    color: #476C5E;
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
    }
`;