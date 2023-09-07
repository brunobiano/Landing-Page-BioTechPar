import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

export const Members = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

    
`;

export const Member = styled.div`
    flex: 1;
    text-align: center;

    a {
        display: inline-block;
        transition: background-color 1.0s;
        width: 45px;
        height: 40px;
    };


    a:hover {
        transform: scale(1.05);
    };

    .teamPhoto {
        border-radius: 100px;
    }
`;