import { useEffect } from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "./image/Logo.png";
import my from "../src/image/my.png";
import group from "../src/image/Group1.png";
import figma from "../src/image/figma.png";
import rec2 from "../src/image/Rectangle 2.png";
import rec3 from "../src/image/Rectangle 3.png";
import rec4 from "../src/image/Rectangle 4.png";
import rec5 from "../src/image/Rectangle 5.png";
import rec6 from "../src/image/Rectangle 6.png";
import rec7 from "../src/image/Rectangle 7.png";
import rec8 from "../src/image/Rectangle 8.png";
import rec9 from "../src/image/Rectangle 9.png";
import rec10 from "../src/image/Rectangle 10.png";
import rec11 from "../src/image/Rectangle 11.png";
import rec12 from "../src/image/Rectangle 12.png";
import rec13 from "../src/image/Rectangle 13.png";
import h from "../src/image/h.png";
import mask from "../src/image/mask.png";
import icon from "../src/image/icon.png";
import insta from "../src/image/instagram.png";
import google from "../src/image/google.png";
import vector from "../src/image/vector.png";

export default function App() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="font-sans bg-[#693B93]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1A0B2E] shadow-md z-50 p-4 flex justify-between items-center flex-wrap px-8 md:px-20">
        <img  src={logo} alt="logo" className="w-10" />
        <div className="navbar flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 text-white text-sm md:text-base">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-500">Home</Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-500">About</Link>
          <Link to="services" smooth duration={500} className="cursor-pointer hover:text-blue-500">Lab</Link>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[#11071F] px-4 md:px-20 pt-32 md:pt-20">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center ">
            <img className="w-40 md:w-52 " src={my} alt="my photo" />
            <div>
              <h4 className="font-specialelite text-white text-lg md:text-xl">A Designer who</h4>
              <h2 className="font-specialelite text-3xl md:text-5xl w-full md:w-[386px] text-white leading-snug">Judges a book by its cover...</h2>
              <p className="font-specialelite text-xs md:text-sm text-white">Because if the cover does not impress you what else can?</p>
            </div>
          </div>
          <div className="pt-16 md:pt-32 max-w-4xl">
            <h2 className="font-specialelite text-white text-3xl md:text-5xl">I'm a Software Engineer.|</h2>
            <h4 className="font-specialelite text-white text-lg md:text-xl mt-2">Currently, I'm a Software Engineer at</h4>
            <p className="font-specialelite text-white text-sm md:text-lg mt-8">A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.</p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-[#11071F] px-4 md:px-20 pt-32">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">Work Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex justify-center gap-6 w-full max-w-xl rounded-[15px] bg-[#683b9327] items-center p-4">
                <img className="w-24 h-28" src={group} alt="group" />
                <div>
                  <h3 className="text-white text-base font-semibold">CIB on the Mobile</h3>
                  <p className="text-white text-xs w-[232px]">Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                  <button className="mt-2 px-4 py-1 rounded-[10px] bg-[#683b9329] border-[#4f2476] border text-white text-xs">LEARN MORE</button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-white text-lg md:text-xl text-center mt-20 max-w-xl">I'm currently looking to join a cross-functional team that values improving people's lives through accessible design</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[figma, rec2, rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10, rec11, rec12, rec13].map((img, i) => (
              <div key={i} className="w-11 h-11 rounded-full bg-[#251C31] flex items-center justify-center">
                <img src={img} alt="skill icon" className="h-5" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20 ">
            <div className="w-44 h-44 rounded-full bg-[#30108099] flex items-center justify-center shadow-[0_5px_200px_rgba(56,189,248,0.8)] p-6  ">
              <img className="w-20 h-24" src={h} alt="h logo" />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="w-full flex flex-col items-center justify-center bg-[#11071F] px-4 md:px-20 pt-32 pb-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          {[1, 2].map((item, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center mt-20`}>
              <img src={mask} alt="project screenshot" className="w-full md:w-1/2 max-w-md" />
              <div className="max-w-lg">
                <h2 className="text-[#9857D3] text-sm">Featured Project</h2>
                <h3 className="text-2xl text-[#CCD6F6] mt-1">Example Project</h3>
                <div className="bg-[#683b936c] rounded-[14px] opacity-50 p-4 mt-4">
                  <p className="text-[#fff] text-sm text-center shadow-[0_5px_200px_rgba(56,189,248,0.8)] p-6">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                </div>
                <div className={`flex ${i % 2 === 0 ? '' : 'justify-end'} gap-4 mt-4` }>
                  <img src={icon} alt="icon" />
                  <img src={icon} alt="icon" />
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-24">
            <h2 className="text-xl text-white">Contact</h2>
            <p className="text-white text-sm mt-4 max-w-2xl mx-auto">I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Or have a project in mind? Let's connect.</p>
            <h5 className="text-white text-sm mt-4">ibrhaimmemon930@gmail.com</h5>
            <div className="flex justify-center gap-6 mt-6">
              <img src={insta} alt="Instagram" />
              <img src={google} alt="Google" />
              <img src={vector} alt="Vector" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
