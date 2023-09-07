import styled from "styled-components";

export const Container = styled.div`
    margin-right: 30px;
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
        color: green;
    }

    a:hover {
        background-color: #6D9773;
        color: #FFFFFF;
    }
`;