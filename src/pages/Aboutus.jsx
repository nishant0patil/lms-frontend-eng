import HomeLayout from "../layouts/HomeLayout";
import aboutMainPage from '../assets/images/aboutMainPage.jpg'
import Balbharati from '..assets/images/Balbharati.png'
import MahatmaGandhi from "../assets/images/MahatmaGandhi.jpeg"
import ShivajiMaharaj from "../assets/images/Shivajimaharaj.jpeg"
import Student from "../assets/images/Student.jpg"


function Aboutus(){
    return(
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">
            <div className="flex item-center gap-5 mx-10">
            <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education </h1>
              <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the world.
              We are providing the platform for the aspiring teachers and students to share 
              their skills,creativity and knowledge to each other to empower and contribute
              in the growth and wellness of mankind
              </p>
            </section>
            <div className="w-1/2">
            <img src={aboutMainPage}
                className="drop-shadow-2xl"
                alt="about main page"
            />

            </div>

            </div>
            <div className="carousel w-1/2 my-10 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
  <img
      src={Balbharati}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">quote</p>
      <h3 className="text-2xl font-semibold" >APj Abdul Kalam</h3>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
    
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
  <img
      src={Balbharati}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">quote</p>
      <h3 className="text-2xl font-semibold" >APj Abdul Kalam</h3>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
  <img
      src={Balbharati}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">quote</p>
      <h3 className="text-2xl font-semibold" >APj Abdul Kalam</h3>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
  <img
      src={Balbharati}
      className="w-40 rounded-full border-2 border-gray-400" />
      <p className="text-xl text-gray-200">quote</p>
      <h3 className="text-2xl font-semibold" >APj Abdul Kalam</h3>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
  </div>
    </div>
  </div>
</div>

            </div>
        </HomeLayout>
    )

}
export default Aboutus;