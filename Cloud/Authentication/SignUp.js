import { supabase } from "./AuthConnection.js";

export async function SignUp(Email,Password) {
    try {
        const{data,error}=await supabase.auth.signUp({
            email:Email,
            password:Password
        })
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