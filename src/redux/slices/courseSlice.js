import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axiosinstance"
import toast from "react-hot-toast";

const initialState ={
    courseList:[]
}

export const getAllCourses = createAsyncThunk("/course/getAllCourses",async (data) =>{
    try{
        const response = axiosInstance.get('/courses',data);
        toast.promise(response,{
            loading: 'wait! fetching all courses',
            success: (data) =>{
                return data?.data?.message;
            },
            error: 'failed to load courses'
        })
        return await response;
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})




const courseSlice = createSlice({
    name:course,
    initialState,
    reducers:{},
    extraReducers:() => {
    
       
    }
        })
    
    


export default courseSlice.reducer