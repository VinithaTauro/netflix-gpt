import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "GPTSearch",
  initialState: {
    showGPTSearch: true,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSearch } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
