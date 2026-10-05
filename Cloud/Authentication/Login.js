import { supabase } from "./AuthConnection.js";

export async function Login(Email,Password) {
    try {
        const {data,error}=await supabase.auth.signInWithPassword({
            email:Email,
            password:Password
        })
        console.log(data)
        if(error) throw error
        return({
            data:data,
            status:'successful'
        })
    } catch (error) {
        return({
            error:error,
            status:'error'
        })
    }
}