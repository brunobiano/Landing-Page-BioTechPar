import styled from "styled-components";

export const BodyContainer = styled.body`
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1200px;
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
    width: 1200px;
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
`;

export const EnterpriseSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 300px;
    background-color: #6D9773;
`;

export const EnterpriseLeft = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
`;

export const EnterpriseRight = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
`;

export const SectionRepresented = styled.div`
    
`;

export const SectionAbout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 350px;
    background-color: #6D9773;
`;

export const AboutLeft = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;

    img {
        width: auto;
    }
`; // Trabalhar aqui para arrumar imagem dele

export const AboutRight = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
`;

export const TextRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`; // Tenho que trabalhar aqui no pos dos textos

export const SectionContact = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 500px;
    background-color: #0C3B2E;
`;

export const ContactLeft = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;
`;

export const ContactRight = styled.div`
    flex: 1;
    margin-top: 60px;
    margin-left: 30px;

    img {
        height: 400px;
    }
`;

export const ContactText = styled.div`
    color: #FFFFDD;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
`;

export const Footer = styled.footer`
    height: 50px;    
`;
