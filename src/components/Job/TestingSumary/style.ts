import styled from "styled-components";

interface ImageContainer {
    width?: string;
    height?: string;
    fontSize?: string;
}

export const subContainer = styled.div`
    width: 100%;  
`;

export const subBottom = styled.div`
    display: flex;
    align-items: start;
    width: 100%;
    height: 1000px;
    line-height: 3.0;
    font-size: 18px;
    cursor: pointer;
    padding-top: 100px; // talvez mexer aqui
    font-weight: bold;
    
    details {   
        width: 100%;
    }

    li {
        display: flex;
        justify-content: space-between;
        background-color: #555555;
    }

    .submenu {
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

    .subLine:hover {
        background-color: #476C5E;
    }

    .active {
        background-color: #476C5E;
    } 

    details {
        summary {
            display: none;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        padding-top: 50px;
        font-size: 14px;

        .subLine {
            padding-top: 3px;
        }
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

    @media screen and (min-width: 320px) and (max-width: 760px) {
        display: flex;
        justify-content: center;

        ul {
            margin-top: 0px;
            height: auto;
        }

        .subLine {
            z-index: 0;
        }

    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        ul {
            margin-top: 0px;
            height: 280px;
        }
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

    @media screen and (min-width: 320px) and (max-width: 760px) {
        padding-top: 0px;
    }
`;

export const SubBottomDetailed = styled.div<ImageContainer>`  
    display: flex;
    width: 100%;

    .image-details {
        width: 30%;
    }

    img {
        width: 100%;
        height: ${(props) => props.height || '100%'};
        transition: transform 0.2s ease-in-out;
    }

    img:hover {
        transform: scale(1.2);
    }

    .image-details ul {
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
            margin-bottom: 40px;
            height: 50px;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        flex-direction: column;
        font-size: ${(props) => props.fontSize || '14px'};

        ul {
            width: 100%;
            padding-top: 20px;
        }

        .subBranch {
            padding-top: 30px;
        }
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        flex-direction: row;
        font-size: 15px;

        img {
            height: 100%;
        }

        .subBranch {
            padding-top: 30px;
        }
    }
`;

export const ImageContainer = styled.div<ImageContainer>`
    width: ${(props) => props.width || '30%'};
    overflow: hidden;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
    }
`;