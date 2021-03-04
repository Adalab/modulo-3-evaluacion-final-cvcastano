import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getData';
import Footer from './Footer';

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('all');

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data));
  }, [])

  const filterHandler = input => {
    console.log(input)
    if (input.key === 'name') {
      setName(input.value);
    }
    else if (input.key === 'species') {
      setSpecies(input.value);
    }
  };

  const filteredCharacters = characters
    .filter(character => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter(character => {
      return species === 'all' ? true : character.species === species
    });

  const renderDetail = props => {
    const id = parseInt(props.match.params.id);

    const clickedCharacter = characters.find(character => {
      return character.id === id;
    });
    return <CharacterDetail character={clickedCharacter} />
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <main className="main">
            <Filters filterHandler={filterHandler} />
            <CharacterList characters={filteredCharacters} />
          </main>
        </Route>
        <Route path='/character/:id' render={renderDetail} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
