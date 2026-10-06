import { supabase } from "../Authentication/AuthConnection.js";

export async function RetrievePlacedOrder() {
    try {
        const{data:userdata,error:usererror}=await supabase.auth.getUser()
        const user=userdata.user
        if(usererror)throw usererror
        const{data:retrievedata,error:retrieveerror}=await supabase.rpc('getuserorderedproducts',{
            _userid:user.id
        })
        if(retrieveerror) throw retrieveerror
        return retrievedata
    } catch (error) {
        console.error(error)
    }
}