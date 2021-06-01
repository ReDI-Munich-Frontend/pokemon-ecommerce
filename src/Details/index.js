/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {Loader} from "../common/Loader";
 import { DetailsLayout } from "./components/DetailsLayout";
import { ImageSection } from "./components/ImageSection";
import { ThumbnailSection } from "./components/ThumbnailSection";
import { MetaSection } from "./components/MetaSection";

const useData = () =>{
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((pokemonData) => {
        Promise.all(pokemonData.abilities.map((a) => fetch(a.ability.url)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((abilityData) =>{
            setData({ ...pokemonData, abilities: abilityData })
            setLoading(false);
            
          })
          .catch((e) =>{
            // eslint-disable-next-line no-console
            console.log(e);
          });
      });
      
  }, [id]);
  return {
    data,
    loading,
    id};

};

export function Details() {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibility, setVisibility] = useState(true);
  const {data, loading, id} = useData();
  const history = useHistory();
  
  const handleclick = (newid)=>{
   if(newid > 0 && newid <=151)
   {
     history.push(`/pokemon/${newid}`);
     setSelectedImage(null);
    
   }
   else if(newid <= 0){
     setVisibility(false);
   }
   if(newid > 151){
    setVisibility(false);
   } 
  }
  if (loading) {
    return <Loader />;
  }
   return (
    
    <DetailsLayout> 
      <ImageSection
        onRightClick={() => handleclick(id+1)} 
        onLeftClick={() => handleclick(id-1)}
        alt={data.name}
        src= {selectedImage || data.sprites.other["official-artwork"].front_default}
        visibility={visibility}
      />
       
      <ThumbnailSection
        name={data.name}
        selectedImage={selectedImage}
        handleMouseEnter={(e) => setSelectedImage(e.target.src)}
        thumbnailOneSrc={data.sprites.other["official-artwork"].front_default}
        thumbnailTwoSrc={data.sprites.other.dream_world.front_default}
        thumbnailThreeSrc={data.sprites.front_default}
        thumbnailFourSrc={data.sprites.back_default}
      />

      <MetaSection
        type={data.types[0].type.name}
        name={data.name}
        price={data.base_experience}
        stats={data.stats}
        abilities={data.abilities}
      />
    </DetailsLayout>
  ); 
}
