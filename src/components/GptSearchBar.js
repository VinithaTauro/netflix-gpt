import { useRef } from "react";
import openai from "../utils/openai";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchMovieResults } from "../utils/moviesSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const fetchSearchResults = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchMovieResults(json));
  };

  const handleGPTSearchBtnClick = async () => {
    const movie = searchText.current.value;

    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: searchText.current.value }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(chatCompletion);
    fetchSearchResults(movie);
  };

  return (
    <div className="pt-[20%] flex justify-center z-10">
      <form
        className="w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 "
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          className="bg-red-500 m-4 px-4 py-2 rounded-lg col-span-3"
          onClick={handleGPTSearchBtnClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
