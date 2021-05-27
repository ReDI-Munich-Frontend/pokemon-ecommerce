import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import { PokemonCard } from "../common/PokemonCard"

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  padding: 25px 300px;
  grid-template-columns: auto;
  grid-gap: 1rem;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 340px);
  grid-gap: 1rem;
  justify-content: center;
`;

const FiltersContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 100px;
  grid-gap: 1rem;
  justify-content: center;
`;

const Filter = styled.input`
  font-size: 23px;
`;

const SortContainer = styled.div`
 justify-content: center;
`;

const Sort = styled.select`
font-size: 16px;
width:content-fit;
`;

export function Overview({ data }) {
  console.log('DATA in overview', data);
  const history = useHistory();
  const [filter, setFilter] = useState('');

  const filteredPokemons = useMemo(() => (
      data.sort((a,b) =>{
        const name1 = a.name.toLowerCase();
        const name2 = b.name.toLowerCase();
        if(name1 < name2){
          return -1;
        }
        if(name2 > name1){
          return 1;
        }
          return 0;
      })
  ), [data])

  const handleCardClick = (id) => {
    history.push(`/${id}`);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  return (
    <Container>
      <FiltersContainer>
        <Filter
          type="text"
          placeholder="Filter pokemons here"
          value={filter}
          onChange={handleFilterChange}
        />
        <SortContainer>
          <Sort>
          {filteredPokemons.map(({name}) => 
          <option
            placeholder="pokemons"
            >{name}</option>)}
          </Sort>
        </SortContainer>
      </FiltersContainer>
      <CardsWrapper>
        {
          filteredPokemons.map(({ name, url, price }) => (
            <PokemonCard
              key={name}
              name={name}
              price={price}
              image={`https://pokeres.bastionbot.org/images/pokemon/${
                url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
              }.png`}
              click={() => handleCardClick(url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''))}
            />
          ))
        }
      </CardsWrapper>
    </Container>
  );
}
