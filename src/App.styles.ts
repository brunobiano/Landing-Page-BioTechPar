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
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 180px;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
`;

export const HeaderArea = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Menu1 = styled.div`
    background-color: #476C5E;
    color: white;
    display: flex;
    justify-content: right;
`;

export const Logo = styled.div`
    padding-top: 10px;
    padding-left: 80px;
    margin-top: -10px;
`;

export const MenuArea = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`; // talvez tirar margin top aqui Evandro ----------------

export const SectionHome = styled.section`
    height: 700px;

    img {
        margin-top: 200px;
        width: 100%;
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
`;

export const About = styled.div`
    margin-top: 60px;
    margin-left: 30px;
    width: 900px;
`;

export const Traits = styled.div`
    margin-top: 60px;
    margin-left: -40px;
`;

export const SectionTeam = styled.div`
    height: 700px;
    padding-top: calc(50vh - 250px);
    margin-top: calc(50vh - 250px);
`;

export const SectionRepresented = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 450px;
    padding-top: calc(50vh - 275px);
`;

export const SectionServices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    padding-top: calc(50vh - 250px);
`;

export const Contact = styled.div`
    height: 550px;
    width: 100%;
    background-color: #476C5E;
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
`;
