import * as C from './App.styles';

// Images
import bioLogo from './assets/logo.png';
import home from './assets/home.jpg';

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

const App = () => { // Header tem que ocupar a largura da page toda
  return (
  <C.BodyContainer>
    <C.Container>
      <C.Header>
        <C.Menu1>
          <TopMenu />
        </C.Menu1>
        <C.HeaderArea>
          <C.Logo>
            <a href="#"><img src={bioLogo} alt="" width={180}/></a>
          </C.Logo>
          <C.MenuArea>
            <MenuList />
          </C.MenuArea>
        </C.HeaderArea>
      </C.Header>

      <C.SectionHome>
        <img src={home} alt="" height={450}/>
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

      <C.SectionAbout id='about'>
        <RepEnterprises />
      </C.SectionAbout> 

      <C.SectionServices id='job'>
        <Services />
      </C.SectionServices>

      <C.Contact id="contact">
        <ContactUs />
      </C.Contact>

      <C.Footer>
        <div>
          Desenvolvido por <a href="https://www.linkedin.com/in/brunobiano/" target='_blank'>Bruno Biano</a>.
          <span>&copy; Bruno Biano. Todos os direitos reservados para BioTechPar.</span>
        </div>
      </C.Footer>
    </C.Container>
  </C.BodyContainer>
  );
}

export default App;

// Lembretes

/* 
  Botão criado em contactText vai virar um componente e talvez vai sair dessa area, na div de fora.
*/