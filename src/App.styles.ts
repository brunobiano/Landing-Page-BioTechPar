import styled from "styled-components";

export const BodyContainer = styled.body`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 180px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #FFF;
    z-index: 1;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: auto;
    }
`;

export const HeaderArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 320px;
        height: 75px;
        margin-top: 45px;
        margin-left: 0px;
        display: block;
        justify-content: center;
    }
`;

export const Menu1 = styled.div`
    background-color: #476C5E;
    color: white;
    display: flex;
    justify-content: right;

    @media screen and (min-width: 320px) and (max-width: 760px){
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
`;

export const Logo = styled.div`
    padding-top: 10px;
    padding-left: 80px;
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    
    img {
        width: 300px;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        padding: 0px;
        margin-left: 30px;
        width: 200px;
        
        img {
            display: none;
            width: 200px;
            padding-bottom: 30px;
       }
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        width: 200px;
    }
`;

export const MenuArea = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    .menu-opener {
        display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        font-size: 8px;
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        
    }
`;

export const SectionHome = styled.section`
    height: auto;
    width: 100%;

    img {
        margin-top: 200px;
        width: 100%;
        height: 500px;
        object-fit: cover;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        height: 350px;
        max-width: 100%;

        img {
            margin-top: 150px;
            width: 100%;
            height: auto;
        }
    }
`;

export const EnterpriseSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding-top: calc(50vh - 300px);

    @media screen and (min-width: 320px) and (max-width: 760px) {
        padding-top: 0px;
    }
`;

export const About = styled.div`
    margin-top: 60px;
    margin-left: 35px;
    width: 900px;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        margin-left: 0px;
        width: 90%;
        p {
            font-size: 12px;
        }
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        margin-left: 0px;
        width: 90%;
    }
`;

export const Traits = styled.div`
    margin-top: 60px;
    margin-left: -40px;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin-left: 0px;
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        width: 90%;
        margin-left: 0px;
    }
`;

export const SectionTeam = styled.div`
    height: 700px;
    padding-top: calc(50vh - 240px);
    margin-top: calc(50vh - 250px);

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionRepresented = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-top: calc(50vh - 210px);

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
        height: 550px;
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        width: 100%;
        height: auto;
    }
`;

export const SectionServices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding-top: 270px;
    padding-bottom: 50px;
    
    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
        height: auto;
    }
`;

export const Contact = styled.div`
    height: 550px;
    width: 100%;
    background-color: #476C5E;

    @media screen and (min-width: 320px) and (max-width: 760px) {
        height: auto;
        width: 100%;
        margin-top: 100px; // tirar aqui caso bigode
    }

    @media screen and (min-width: 761px) and (max-width: 1024px){
        height: auto;
    }
`;

export const Footer = styled.footer`
    height: 20px;
    background-color: white;    

    div {
        margin-left: 50px;
    }
    
    span {
        margin-left: 70px;
    }

    a {
        text-decoration: none;
        color: #476C5E;
    }

    br {
        display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        width: 100%;
        height: auto;

        div {
            margin-left: 5px;
        }

        br {
            display: block;
        }
    }
`;

/* Lembretes para serem feitos:
    - Fazer responsividade para orientation: landscape
    - O mesmo para as outras dimensões de tela.
*/