import { useState, useMemo } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { PokemonCard } from "../common/PokemonCard";

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

const ControlContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "itemone  itemtwo";
  grid-gap: 30rem;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Filter = styled.input`
  font-size: 23px;
`;

const SortDropDown = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export function Overview({ data }) {
  console.log("DATA in overview", data);
  const history = useHistory();
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("None");

  const filteredPokemons = useMemo(
    () =>
      data
        .filter((pokemon) => pokemon.name.includes(filter.toLowerCase()))
        .sort((a, b) => {
          if (sortOrder === "None") {
            return 0;
          }
          if (a.name < b.name) {
            return sortOrder === "Ascending" ? -1 : 1;
          }
          if (a.name > b.name) {
            return sortOrder === "Ascending" ? 1 : -1;
          }
          return 0;
        }),
    [filter, sortOrder, data]
  );

  const handleCardClick = (id) => {
    history.push(`/${id}`);
  };

  const handleFilterChange = (e) => {
    console.log("handleFilterChange", e.target.value);
    setFilter(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    console.log("handleSortOrderChange", e.target.innerText);
    setSortOrder(e.target.innerText);
  };

  return (
    <Container>
      <ControlContainer>
        <Filter
          type="text"
          placeholder="Filter pokemons here"
          value={filter}
          onChange={handleFilterChange}
        />

        <SortDropDown>
          <DropDownLi>
            <Dropbtn>Sort</Dropbtn>
            <DropDownContent>
              {" "}
              <SubA value="none" onClick={handleSortOrderChange}>
                {" "}
                None
              </SubA>
              <SubA value="ascending" onClick={handleSortOrderChange}>
                {" "}
                Ascending
              </SubA>
              <SubA value="descending" onClick={handleSortOrderChange}>
                {" "}
                Descending
              </SubA>
            </DropDownContent>
          </DropDownLi>
        </SortDropDown>
      </ControlContainer>
      <CardsWrapper>
        {filteredPokemons.map(({ name, url, price }) => (
          <PokemonCard
            key={name}
            name={name}
            price={price}
            image={`https://pokeres.bastionbot.org/images/pokemon/${url
              .replace("https://pokeapi.co/api/v2/pokemon/", "")
              .replace("/", "")}.png`}
            click={() =>
              handleCardClick(
                url
                  .replace("https://pokeapi.co/api/v2/pokemon/", "")
                  .replace("/", "")
              )
            }
          />
        ))}
      </CardsWrapper>
    </Container>
  );
}
