
import gitLogo from '../assets/git-logo.jpeg';
import {Container} from './styles';
import Input from '../components/Input';
import {Item} from '../components/item';
import { useState } from 'react';
import Button from '../components/Button';
import {api} from '../services/api';


function App() {
  

  const [respos, setRepos] = useState([]);

  const [currentRepo, changeCurrentRepo] = useState([]);
;
  const searchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id){
      setRepos(prev => [...prev,data]);
    }
  }
  return (
    <div className="App">
      <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => changeCurrentRepo(e.target.value)}></Input> 
      <Button onClick={searchRepo}></Button>
      {respos.map(repo => <Item/>)}
      <Item></Item>
      </Container>
    </div>
  );
}
//33:30
export default App;
