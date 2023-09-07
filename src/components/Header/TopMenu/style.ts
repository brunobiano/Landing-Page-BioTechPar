import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LinkMenu = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;

    a {
        text-decoration: none;
        color: white;
        margin-left: 10px;
        margin-right: 15px;
    };

    img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        margin-bottom: 2px;
    }
`;