import styled from "styled-components";

export const Container = styled.div`
    margin-right: 30px;
    margin-top: -25px;

    nav {
        display: block;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        margin-top: -20px;

        nav {
            display: none;
            position: absolute;
            z-index: 98;
            height: 450px;
            background-color: rgba(255, 255, 255, 0.8);
            width: 90vw;
            top: 115px;
            right: 0;
            font-size: 16px;

            ul {
                display: flex;
                flex-direction: column;
            }
        }

        .menu-opener {
            display: block;
            position: absolute;
            right: 10px;
            top: 65px;
        }
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        nav {
            display: none;
            position: absolute;
            z-index: 98;
            height: 400px;
            background-color: rgba(255, 255, 255, 0.8);
            width: 40vw;
            top: 115px;
            right: 0;
            font-size: 16px;

            ul {
                display: flex;
                flex-direction: column;
            }
        }

        .menu-opener {
            display: block;
        }
    }
`;

export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        display: block;
        padding: 15px;
        text-decoration: none;
        color: #476C5E;
    }
    
    .line {
        position: relative;
    }

    .line::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #476C5E;
        transition: width 0.5s ease;
    }

    .line:hover::after {
        width: 100%;
    }
`;