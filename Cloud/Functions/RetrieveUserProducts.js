import { supabase } from "../Authentication/AuthConnection.js";

export async function FetchUserProducts() {
    try {
        const {data:userdata,error:usererror}=await supabase.auth.getUser()
        const user=userdata.user
        if(usererror)throw usererror
        const{data:retrievedata,error:retrieverror}=await supabase.rpc('retrieveuserproducts',{
            _userid:user.id
        })
        if(retrieverror) throw retrieverror
        return retrievedata
    } catch (error) {
        console.error(error)
    }
}