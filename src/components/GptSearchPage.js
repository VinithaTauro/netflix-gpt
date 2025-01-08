import { BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="bg-image"></img>
      </div>
      <div>
        <GptSearchBar />
      </div>
    </div>
  );
};

export default GptSearchPage;
