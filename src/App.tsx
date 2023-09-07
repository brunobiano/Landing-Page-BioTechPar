import * as C from './App.styles';

// Images
import bioLogo from './assets/1.png';

// Components - Header
import { MenuList } from './components/Header/HeaderMenu';
import { TopMenu } from './components/Header/TopMenu';

// Components - Sections
import { AboutUs } from './components/AboutUs/Left';
import { AboutUsTraits } from './components/AboutUs/Right';
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
            <img src={bioLogo} alt="" width={200}/>
          </C.Logo>
          <C.MenuArea>
            <MenuList />
          </C.MenuArea>
        </C.HeaderArea>
      </C.Header>

      <C.EnterpriseSection>
        <C.EnterpriseLeft>
          <AboutUs />
        </C.EnterpriseLeft>
        <C.EnterpriseRight>
          <AboutUsTraits />
        </C.EnterpriseRight>
      </C.EnterpriseSection>

      <C.SectionTeam>
        <TeamMembers />
      </C.SectionTeam>

      <C.SectionAbout>
        <RepEnterprises />
      </C.SectionAbout> 

      <C.SectionServices>
        <Services />
      </C.SectionServices>

      <C.Contact>
        <ContactUs />
      </C.Contact>

      <C.Footer>
        <div>
          Desenvolvido por Bruno Biano.
          <span>&copy; Bruno Biano. Todos os direitos reservados para BioTechPar.</span>
        </div>
      </C.Footer>
    </C.Container>
  </C.BodyContainer>
  );
}

export default App;

// Lembretes


/*Altura de cada seção poderá ser feita para ser dinâmica, dependendo do que o Evandro quiser

Botão criado em contactText vai virar um componente e talvez vai sair dessa area, na div de fora.
*/