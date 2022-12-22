import { useState } from 'react';

import { BsGithub } from 'react-icons/bs';

import { Container } from './styles';

import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {
    
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const alreadyExists = repos.find(repo => repo.id === data.id);

      if(!alreadyExists){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('');
      }
      else{
        alert('Repositório já adicionado!');
      }
      return;
    }
    alert('Repositório não encontrado!');

  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <div>
      <BsGithub size={90}/>
      </div>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} onRemove={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
