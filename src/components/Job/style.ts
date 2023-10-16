import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
    width: 100%;
`;

export const Title = styled.div`
    margin-bottom: 40px;

    h1 {
        color: #476C5E;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    ul {
        list-style-type: none;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
        font-size: 12px;

        ul {
            width: 80%;
        }

        br {
            display: none;
        }
    }
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 0 20px;
    height: 70px;
    border: 1px solid #476C5E;
    border-radius: 30px;
    z-index: 0;

    .line {
        color: #476C5E;
        cursor: pointer;
        position: relative;
    }

    .active {
        border-bottom: 3px solid #476C5E;
    }

    .line::after {
        content: '';
        position: absolute;
        bottom: 0px;
        top: 28px;
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

export const subContainer = styled.div`
    display: flex
`;

export const SubMenuLeft = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 400px;
    line-height: 3.0;
    font-size: 18px;

    .line {
        color: #476C5E;
        cursor: pointer;
        position: relative;
    }

    .active {
        border-bottom: 3px solid #476C5E;
        width: 15%;
    }

    .line::after {
        content: '';
        position: absolute;
        top: 55px;
        left: 0px;
        width: 0;
        height: 2px;
        background-color: #476C5E;
        transition: width 0.5s ease;
    }

    .line:hover::after {
        width: 15%; // mexer aqui depois
    }

    strong {
        color: #476C5E;
        font-style: italic;
    }

    .submenu {
        display: block;
        list-style: none;
    }

    .subLine {
        cursor: pointer;
    }
`;

export const SubMenuRight = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    line-height: 2.8;
    padding-left: 20px;

    .subBranch {
        list-style-type: '➡ ';
        padding-left: 40px;
    }
`;


/*


    */