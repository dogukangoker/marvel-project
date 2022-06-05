import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AppState {
  characters: Characters[];
  number: number;
}

interface Characters {
  id: number;
  name: string;
  comics: [];
  thumbnail: {
    path: string;
    extension: string;
  };
}

const initialState: AppState = {
  characters: [],
  number: 0,
};

export const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    addCharacters: (state, action) => {
      state.characters = action.payload;
    },
    removeCharacter: (state, action) => {
      state.characters.splice(action.payload, 1);
    },
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { addCharacters, removeCharacter, changeNumber } =
  CharacterSlice.actions;

export const selectCharacter = (state: RootState) => state.character.characters;

export default CharacterSlice.reducer;
