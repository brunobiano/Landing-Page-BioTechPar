import * as C from './App.styles';

// Images
import bioLogo from './assets/logo.png';
import BioTech from './assets/gif.gif';

// Components - Header
import { MenuList } from './components/Header/HeaderMenu';
import { TopMenu } from './components/Header/TopMenu';

// Components - Sections
import { AboutUs } from './components/AboutUs/AboutUs';
import { AboutUsTraits } from './components/AboutUs/AboutTraits';
import { TeamMembers } from './components/Team';
import { RepEnterprises } from './components/Represented';
import { Services } from './components/Job';
import { ContactUs } from './components/Contact';
import { ScrollImage } from './components/ScrollWhatsapp';

const App = () => {
  return (
  <C.BodyContainer>
    <C.Container>
      <C.Header>
        <C.Menu1>
          <TopMenu />
        </C.Menu1>
        <C.HeaderArea>
          <C.Logo>
            <a href="#"><img src={bioLogo} alt="Logotipo do Meu Site"/></a>
          </C.Logo>
          <C.MenuArea>
            <MenuList />
          </C.MenuArea>
        </C.HeaderArea>
      </C.Header>

      <C.SectionHome id='home'>
        <img src={BioTech} alt=""/>
      </C.SectionHome>
      
      <C.EnterpriseSection id='ourMission'>
        <C.About>
          <AboutUs />
        </C.About>
        <C.Traits>
          <AboutUsTraits />
        </C.Traits>
      </C.EnterpriseSection>

      <C.SectionTeam id='team'>
        <TeamMembers />
      </C.SectionTeam>

      <C.SectionRepresented id='about'>
        <RepEnterprises />
      </C.SectionRepresented> 

      <C.SectionServices id='job'>
        <Services />
      </C.SectionServices>

      <C.Contact id="contact">
        <ContactUs />
      </C.Contact>

      <C.Footer>
        <div>
          Desenvolvido por <a href="https://www.linkedin.com/in/brunobiano/" target='_blank' rel='noreferrer'>Bruno Biano</a>.
          <span> <br /> &copy; Bruno Biano. Todos os direitos reservados para BioTechPar.</span>
        </div>
      </C.Footer>
      <ScrollImage />
    </C.Container>
  </C.BodyContainer>
  );
}

export default App;

// Lembretes

/* 
  Botão criado em contactText vai virar um componente e talvez vai sair dessa area, na div de fora.

  após o backend pro botão, falta responsividade, acessibilidade (perguntar se o evandro quer após ver como faz),
  fazer funcionar em outros navegadores além do chrome.
*/