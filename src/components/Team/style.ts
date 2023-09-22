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

    h1 {
        color: #476C5E;
    }
`;

export const Members = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        flex-direction: column;
    }
`;

export const Member = styled.div`
    flex: 1;
    text-align: center;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        margin-top: 40px;
    }

    a {
        display: inline-block;
        transition: background-color 1.0s;
        width: 45px;
        height: 40px;
    }


    a:hover {
        transform: scale(1.05);
    }

    .teamPhoto {
        border-radius: 100px;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        img {
            width: 200px;
            height: 250px;
        }

        .phoneImg {
            width: 50px;
            height: 50px;
        }

        h4 {
            padding-top: 10px;
        }

        .teamPhoto {
            border-radius: 80px;
        }
    }
`;