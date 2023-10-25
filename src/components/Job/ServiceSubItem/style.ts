import styled from "styled-components";

export const subContainer = styled.div`
    width: 100%;
`;

export const SubBottom = styled.div`
    display: flex;
    align-items: start;
    width: 750px;
    height: 650px;
    line-height: 3.0;
    font-size: 18px;
    cursor: pointer;
    width: 100%;
    padding-top: 100px; // talvez mexer aqui
    font-weight: bold;

    li {
        display: flex;
        justify-content: space-between;
        background-color: #555555;
    }

    .submenu {
        display: block;
        width: 100%;
    }

    .subLine {
        cursor: pointer;
        border-bottom: 1px solid white;
        padding: 0 20px;
        color: white;
        height: 50px;
        transition: background-color 0.3s ease;
    }

    .submenu .subLine {
        max-height: 60px;
        overflow: hidden;
        transition: max-height 2.3s ease-in-out;
    }

    .submenu .subLine.active {
        max-height: 200px; 
    }

    .subLine:hover {
        background-color: #476C5E;
    }

    .active {
        background-color: #476C5E;
    }
`;

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ul {
        margin-top: 40px;
    }
`;

export const GifArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 1420px; //alterar aqui, margin left para voltar ao normal
    padding-top: 0px; // era 30
    margin-left: -140px; // caso manter, tem q mexer pra ficar responsivo
    padding-bottom: 50px;

    h2 {
        color: #476C5E;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export const SubBottomDetailed = styled.div`  
    display: flex;
    width: 100%;

    .before-effect {  
        display: flex;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        transition: max-height 4.3s ease-in-out;
    }

    .smoothExpansion {
        max-height: 400px;
    }

    img {
        width: 100%;
        height: 100%;
        transition: transform 0.2s ease-in-out;
    }

    img:hover {
        transform: scale(1.2);
    }

    ul {
        width: 70%;
    }

    li {
        padding-left: 20px;
        background-color: white;
    }

    .subBranch {
        list-style: square;
        width: 100%;
        padding-left: 30px;
    }

`;

export const ImageContainer = styled.div`
    width: 30%;
    position: relative;
    overflow: hidden;
`;

/*.submenu .subLine {
        
        background-color: red;
    }

    .submenu .subLine.active {
        max-height: 200px; 
    } */