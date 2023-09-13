import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
`;

export const LinkMenu = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    margin-top: 20px;

    a {
        text-decoration: none;
        color: white;
        margin-left: 10px;
        margin-right: 25px;
    };

    img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        margin-bottom: 2px;
    }
`;