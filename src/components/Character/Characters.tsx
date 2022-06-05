import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCharacter,
  addCharacters,
  changeNumber,
} from "../../redux/slices/CharacterSlice";
import "./style.scss";
import SingleCharacter from "../SingleCharacter";
import axios from "axios";

const PUBLIC_KEY = "993416a3def6d399a8c787b5d53468ea";
const PRIVATE_KEY = "d36fe6e181a9eb3dc4c98e5e8d3236e0c1d54b43";
const Characters = () => {
  const dispatch = useDispatch();
  const character = useSelector(selectCharacter);
  useEffect(() => {
    const getHeroes = async () => {
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=${PUBLIC_KEY}&hash=${PRIVATE_KEY}`
      );
      dispatch(addCharacters(response.data.data.results));
    };
    getHeroes();
  }, []);
  return (
    <div>
      <button onClick={() => console.log(character)}>test</button>
      <SingleCharacter character={character} />
    </div>
  );
};

export default Characters;
