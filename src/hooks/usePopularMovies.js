import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  console.log("OPTIONS", OPTIONS);

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
