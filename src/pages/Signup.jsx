import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import toast from "react-hot-toast";
import { isEmail, isValidpassword } from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup () {
    const navigate =useNavigate();
    const dispath = useDispatch();

    const [signupDetails,setSignupDetails] = useState({
        email:"",
        fullName:'',
        password:'',
        avtar:'',
    })

    const[previewImage, setPreviewImage] = useState("");

    function handleUserInput(e){
        const {name,value} = e.target;
        setSignupDetails({
            ...signupDetails,
            [name] : value

        })
    }

    function handleImage(e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(!uploadedImage) return;
        setSignupDetails({
            ...signupDetails,
            avtar: uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener('load',function(){
            setPreviewImage(this.result)
        })
    }
    


   async function onFormSubmit(e){
        e.preventDefault();
        if(!signupDetails.email || signupDetails.password || signupDetails.fullName || signupDeatails.avtar )
            toast.error('please fill all the deatails');
        return;

    }
    if(signupDetails.fullName.length < 5){
        toast.error("Name should be atleast of 5 character")
        return;
    }
    if(!isEmail(signupDetails.email)){
        toast.error('invalid email is provided')
        return;
    }
    if(!isValidpassword(signupDetails.password)){
        toast.error('invalid password is provided, password should be 6-16 character long with atleast a number and special character')
        return;
    }

    const formData = new FormData();
    formData.append('fullName', signupDetails.fullName);
    formData.append('email', signupDetails.email);
    formData.append('password', signupDetails.password);
    formData.append('avtar', signupDetails.avtar);

    const response = await dispatch(createAccount(formData));
    if(response?.payload?.data){
        navigate('/')
    }
    setSignupDetails(
        {
            email:"", 
            fullName:'',
            password:'',
            avtar:'',
        }

    )
    setPreviewImage("")

return(
    <HomeLayout>
    <div className="flex overflow-x-auto items-center justufy-center h-[100vh]">
    <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-3.5">
    <h1 className="text-2xl text-center font-bold">Registration page</h1>
    <label htmlFor="image_uploads" className="cursor-pointer">
    { previewImage ? (
        <img className="w-24 h-24 rounded-full m-auto" src={previewImage}/>
    ) : (
        <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
    )}
</label>
    <input
    onChange={handleImage}
        type="file"
        className="hidden"
        name="image_uoloads"
        id="image_uploads"
        accept=".jpg, .jpeg, .png, .svg" />

        <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="font-semibold">Name</label>
        <input
            onChange={handleUserInput}
            value={signupDetails.fullName}
            required
            type="text"
            className="bg-transparent px-2 py-1 border"
            name="fullName"
            placeholder="enter your useraname"
            id="fullName"
        />

        </div>
        <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">Email</label>
        <input
        onChange={handleUserInput}
            value={signupDetails.email}
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
            value={signupDetails.password}
            required
            type="password"
            className="bg-transparent px-2 py-1 border"
            name="password"
            placeholder="enter your Password"
            id="password"
        />
        </div>

        <button className="mt-2 bg-yellow-800 hover:bg:-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
        Create account
 </button>
 <p className="text-center">
      Already have an account ? <Link to="/login" className="cursor-pointer text-accent ">Login</Link>

 </p>



    </form>

    </div>



    </HomeLayout>

)
}

export default Signup;