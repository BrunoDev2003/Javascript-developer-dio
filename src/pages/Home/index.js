
import './App.css';
import './styles.css';
import background from '../../assets/background.png';
import App from './pages/Home';
import {Header} from '../../components/Header';
import ItemList from '../../components/ItemList';

function App() {
  return (
    <div className="App">
      <Header>
        <div className="conteudo">
          <img src={background} className="background" alt="background-app"></img>
          <div className="info">
            <div>
              <input name="usuario" placeholder="@username"></input>
              <button>Buscar</button>
            </div>
            <div>
              <img src="https://avatars.githubusercontent.com/u/92750091?v=4" className="profile" alt="imagem de perfil"></img>
              <div className="perfil">
                <h3>Bruno Mendonça Gusmão</h3>
                <p>Descrição placeholder</p>
              </div>
            </div>
            <hr></hr>
            <div>
              <h4 className="repositorio">Repósitorios</h4>
              <ItemList title="Teste" description="teste descrição" />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default App;
