import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  return (
    <div className="w-32 pr-4">
      <img alt="movie-img" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
