import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggessions = () => {
  const searchResults = useSelector((store) => store.movies);
  console.log(searchResults?.movieResults);
  if (!searchResults?.movieResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        <MovieList
          title={"Results"}
          movies={searchResults?.movieResults?.results}
        />
      </div>
    </div>
  );
};

export default GptSearchSuggessions;
