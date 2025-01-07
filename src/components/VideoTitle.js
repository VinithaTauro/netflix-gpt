const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold py-4 text-3xl">{title}</h1>
      <p className="w-4/12">{overview}</p>
      <div className="py-6">
        <button className="font-bold bg-white py-4 px-16 rounded-lg text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="font-bold  mx-2 bg-slate-600 py-4 px-16 rounded-lg text-white bg-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
