import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`;

export const LinkMenu = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin-top: 5px;

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

    .mailIcon {
        padding-top: 3px;
    }
`;