
import gitLogo from '../assets/git-logo.jpeg';
import {Container} from './styles';
import Input from '../components/Input';
import {Item} from '../components/item';

function App() {

  const [repos, setRepos] = useState([])
  return (
    <div className="App">
      <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input></Input>
      <Item></Item>
      </Container>
    </div>
  );
}
//24:30
export default App;
