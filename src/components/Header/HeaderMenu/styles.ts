import styled from "styled-components";

export const Container = styled.div`
    margin-right: 30px;
    margin-top: -25px;
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