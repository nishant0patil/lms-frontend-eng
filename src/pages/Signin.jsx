import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail,} from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

function Signin () {
    const navigate =useNavigate();
    const dispatch = useDispatch();

    const [signinDetails,setSigninDetails] = useState({
        email:"",
        password:'',
        
    })

    

    function handleUserInput(e){
        const {name,value} = e.target;
        setSignDetails({
            ...signinDetails,
            [name] : value

        })
    }

  
    


   async function onFormSubmit(e){
        e.preventDefault();
        if(!signinDetails.email || signinDetails.password || signinDetails.fullName || signupDeatails.avtar )
            toast.error('please fill all the deatails');
        return;

    }
    
    if(!isEmail(signinDetails.email)){
        toast.error('invalid email is provided')
        return;
    }
    


    

    const response = await dispatch(login(signinDetails));
    if(response?.payload?.data){
        navigate('/')
    }
    setSigninDetails(
        {
            email:"", 
            password:'',
            
        }

    )
   

return(
    <HomeLayout>
    <div className="flex overflow-x-auto items-center justufy-center h-[100vh]">
    <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-3.5">
    <h1 className="text-2xl text-center font-bold">Login page</h1>
   

        
        <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">Email</label>
        <input
        onChange={handleUserInput}
            value={signinDetails.email}
            required
            type="text"
            className="bg-transparent px-2 py-1 border"
            name="email"
            placeholder="enter your Email"
            id="email"
        />

        </div>
        <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-semibold">Password</label>
        <input
        onChange={handleUserInput}
            value={signinDetails.password}
            required
            type="password"
            className="bg-transparent px-2 py-1 border"
            name="password"
            placeholder="enter your Password"
            id="password"
        />
        </div>

        <button className="mt-2 bg-yellow-800 hover:bg:-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
        Sign In
 </button>
 <p className="text-center">
      Do not have an account ? <Link to="/signup" className="cursor-pointer text-accent ">Login</Link>

 </p>



    </form>

    </div>



    </HomeLayout>

)
}

export default Signin;