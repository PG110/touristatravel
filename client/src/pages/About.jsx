import aboutImg from "../assets/images/about_img.png";
import { FaPlaneDeparture, FaMapMarkedAlt, FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-blue-200 via-yellow-100 to-pink-200">
      
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-300/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-200/40 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 w-[95%] max-w-2xl rounded-3xl shadow-2xl p-10 flex flex-col gap-8 bg-white/60 backdrop-blur-2xl border border-blue-100">
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <img
              src={aboutImg}
              className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-xl object-cover ring-4 ring-white"
              alt="Travel"
            />
            <span className="absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-lg text-blue-500 border border-blue-200">
              <FaPlaneDeparture size={32} />
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-pink-500 to-yellow-500 tracking-wide mt-2 drop-shadow">
            Pranav
          </h1>
          <p className="flex items-center gap-2 text-xl text-blue-700 font-medium">
            <FaMapMarkedAlt className="text-yellow-500" /> Exploring the world, one journey at a time
          </p>
        </div>
        <p className="text-gray-800 text-center text-lg leading-relaxed font-medium">
          <span className="text-2xl">🌏</span> Welcome to my travel diary!<br />
          <span className="text-blue-600 font-semibold">Adventure</span>, <span className="text-pink-500 font-semibold">culture</span>, and <span className="text-yellow-500 font-semibold">memories</span> await.<br />
          Whether it’s hiking misty mountains, relaxing on sun-kissed beaches, or wandering vibrant city streets, every journey brings a new story.<br /><br />
          <span className="italic text-blue-500">Let’s discover the world together—one adventure at a time!</span>
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 hover:from-blue-600 hover:to-yellow-500 text-white font-bold shadow-lg transition-all text-lg"
          >
            Follow on Instagram <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
