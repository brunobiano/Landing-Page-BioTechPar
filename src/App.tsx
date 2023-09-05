import * as C from './App.styles';

// Images
import representEv from './assets/representEv.jpg';
import bioLogo from './assets/1.png';
import rndmImg from './assets/imgRandom.jpg';

// Components
import { MenuList } from './components/HeaderMenu';
import { TopMenu } from './components/TopMenu';
import { Enterprises } from './components/RepresentedEnterprises'

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
          A solução para a sua pesquisa
        </C.EnterpriseLeft>
        <C.EnterpriseRight>
          Somos uma empresa de representação <br/>
          comercial na área de biotecnologia. <br/> <br/>
          
          Representamos as melhores empresas <br/>
          no segmento de equipamentos e ...
        </C.EnterpriseRight>
      </C.EnterpriseSection>

      <C.SectionRepresented>
        <Enterprises />
      </C.SectionRepresented>

      <C.SectionAbout>
        <C.AboutLeft>
          <img src={representEv} alt="" />
        </C.AboutLeft>
        <C.AboutRight>
          <C.TextRight>
            <h3>O Representante</h3>
            <p>Logística Sandine</p>
            <p>Escola de Marketing Marafela</p>
            <p>Grupo de Mídia Digital Silva</p>
            <p>Samurai Produções</p>
            <p>Bertold Soluções</p>
            <p>Banco Minas Douradas</p>
          </C.TextRight>
        </C.AboutRight>
      </C.SectionAbout>

      <C.SectionContact>
        <C.ContactLeft>
          <C.ContactText>
            <h2>Fale conosco</h2> <br />
            <p>Salão de Conferência</p>
            <p>Rua qualquer, 1234</p>
            <p>Cidade - SP</p>
            
            <br />

            <p>(12)3456-7890</p>
            <p>ola@hotmail.com</p>
            <p>@grandesite</p>

            <br />

            <button>Reserve sua vaga</button>
          </C.ContactText>
        </C.ContactLeft>
        <C.ContactRight>
          <img src={rndmImg} alt="" />
        </C.ContactRight>
      </C.SectionContact>

      <C.Footer>
        Em Produção..... Todos os direitos reservados.
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