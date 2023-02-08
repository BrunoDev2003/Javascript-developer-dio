
import gitLogo from '../assets/git-logo.jpeg';
import {Container} from './styles';
import Input from '../components/Input';

function App() {
  return (
    <div className="App">
      <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input></Input>
      </Container>
    </div>
  );
}

export default App;
