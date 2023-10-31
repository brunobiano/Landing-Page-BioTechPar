import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
    width: 100%;
`;

export const Title = styled.div`
    margin-bottom: 40px;

    h1 {
        color: #476C5E;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;

        ul {
            width: 100%;
            height: 200px;
        }
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        width: 95%;
    }
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 0 20px;
    height: 70px;
    border: 1px solid #476C5E;
    border-radius: 30px;
    z-index: 0;

    .line {
        color: #476C5E;
        cursor: pointer;
        position: relative;
    }

    .active {
        border-bottom: 3px solid #476C5E;
    }

    .line::after {
        content: '';
        position: absolute;
        bottom: 0px;
        top: 28px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #476C5E;
        transition: width 0.5s ease;
    }

    .line:hover::after {
        width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 350px) {
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
        font-size: 20px;
        padding-right: 10px;

        .line::after {
            content: '';
            position: static;
            bottom: 0px;
            top: 0;
            left: 0;
            width: 0;
            height: 0px;
            transition: width 0.5s ease;
        }

        .line:hover::after {
            width: 0;
            display: none;
            align-items: center;
        }

        .active {
            text-decoration: underline;
            border-bottom: none;
            font-size: 22px;
        }
    }

    @media screen and (min-width: 350px) and (max-width: 760px) {
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
        font-size: 20px;
        padding-right: 10px;

        .line::after {
            content: '';
            position: static;
            bottom: 0px;
            top: 0;
            left: 0;
            width: 0;
            height: 0px;
            transition: width 0.5s ease;
        }

        .line:hover::after {
            width: 0;
            display: none;
            align-items: center;
        }

        .active {
            text-decoration: underline;
            border-bottom: none;
            font-size: 22px;
        }
    }
`;

export const SubServicesArea = styled.div`
    height: 800px;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        height: 700px;
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        height: 800px; // mexer aqui depois de alterar dkrypt
    }
`;