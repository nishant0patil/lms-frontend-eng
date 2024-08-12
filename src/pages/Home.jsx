import { Link } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import homePageMainImage from "../assets/images/homePageMainImage.JPEG"

function Home () {
    return(
        <>
            <HomeLayout>
            <div className="pt-10 text-white flex-items-center justify-center gap-10 mx-16 h-[90vh]">
            <div className="w-1/2 space-y-6">
            <h1 className="text-5xl font-semibolld">Find out best <span className="text-yellow-500 font-bold" >Online Cources</span></h1>
            <p className="text-xl text-grey-200">
                we have large library of corses taught by highly skilled and qualified faculties at very affordable cost 
            </p>

            <div className="space-x-6">
            <Link to='/cources'>
            <Button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 ">
            Explore cources
            </Button>
             </Link>
             <Link to='/contacts'>
            <Button className="border border-yellow-500 bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 ">
            Contact Us
            </Button>
             </Link>

            </div>

            </div>
            <div className="w-1/2 flex items-center justify-center">
            <img src={homePageMainImage} alt="home page"/>

            </div>

            </div>

            </HomeLayout>
        </>
    )

}
export default Home;