const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center  text-white z-10">
      <form className="w-1/2 grid grid-cols-12 bg-black">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button className="bg-red-500 m-4 px-4 py-2 rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
