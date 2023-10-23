import styled from "styled-components";

export const subContainer = styled.div`
    width: 100%;
`;

export const SubUpper = styled.div`
    height: 300px;
    width: 100%;
    padding-top: 30px;

    img {
        width: 100%;
        height: 100%;
    }
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
    }

    .subLine:hover {
        background-color: #476C5E;
    }

    .active {
        background-color: #476C5E;
    }

    span {
        transition: transform 0.2s ease-in-out;
    }
`;

export const SubBottomDetailed = styled.div`
    display: flex;
    width: 100%;

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
        padding-left: 50px;
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

/*export const SubBottomDetailed = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    line-height: 2.8;
    padding-left: 20px;

    
`; */