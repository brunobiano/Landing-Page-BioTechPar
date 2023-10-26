import styled from "styled-components";

interface ImageContainer {
    width?: string;
}

export const subContainer = styled.div`
    width: 100%;
`;

export const SubBottom = styled.div`
    display: flex;
    align-items: start;
    width: 750px;
    height: 1000px;
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
    justify-content: top;
    width: 100%;

    ul {
        margin-top: 50px;
    }
`;

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    padding-top: 10px; 
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

    .before-effect {  // voltar se tiver que mexer na animação (com div envolvendo C.SubBottomDetailed)
        display: flex;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        transition: max-height 4.3s ease-in-out;
    }

    .smoothExpansion { // voltar se tiver que mexer na animação
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

        li {
            margin-top: -50px;
            height: 100px;
        }
    }

`;

export const ImageContainer = styled.div<ImageContainer>`
    width: ${(props) => props.width || '30%'};
    overflow: hidden;
`;

/*.submenu .subLine {
        
        background-color: red;
    }

    .submenu .subLine.active {
        max-height: 200px; 
    } */