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
    height: 140px;
`;

export const HeaderArea = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Menu1 = styled.div`
    background-color: #6D9773;
    color: white;
    display: flex;
    justify-content: right;
    height: 90px;
`;

export const Logo = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 80px;
`;

export const MenuArea = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`; // talvez tirar margin top aqui Evandro

export const EnterpriseSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 475px;
    background-color: white;
`;

export const EnterpriseLeft = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;
`;

export const EnterpriseRight = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;
`;

export const SectionTeam = styled.div`
    height: 700px;
`;

export const SectionAbout = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 450px;
    background-color: #6D9773;
`;

export const TextRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`; // Tenho que trabalhar aqui no pos dos textos

export const SectionServices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    background-color: #0C3B2E;
`;

export const Contact = styled.div`
    height: 550px;
    width: 100%;
    background-color: #978873;
`;

export const Footer = styled.footer`
    height: 30px;
    background-color: rgb(164, 236, 136);    

    div {
        margin-left: 50px;
    }
    
    span {
        margin-left: 70px;
    }
`;
