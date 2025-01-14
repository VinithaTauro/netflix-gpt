import { BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggessions from "./GptSearchSuggessions";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="bg-image"></img>
      </div>
      <div>
        <GptSearchBar />
        <GptSearchSuggessions />
      </div>
    </div>
  );
};

export default GptSearchPage;
