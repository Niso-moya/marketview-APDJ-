import { supabase } from "../Authentication/AuthConnection.js";

export async function RetrieveUserDetails() {

    try {
        const {data:userdata,error:usererror} =await supabase.auth.getUser()
        if(usererror) throw usererror
        const user=userdata.user
        const {data:retrievedata,error:retrieveerror}=await supabase.rpc('retrieveuserdetails',{
            _userid:user.id
        })
        if(retrieveerror)throw retrieveerror
        return retrievedata;
    } catch (error) {
        console.error(error)
    }
}