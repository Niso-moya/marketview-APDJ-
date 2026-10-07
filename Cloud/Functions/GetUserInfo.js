import { supabase } from "../Authentication/AuthConnection.js";

export async function GetUserDetails(Userid) {

    try {
        const {data:retrievedata,error:retrieveerror}=await supabase.rpc('retrieveuserdetails',{
            _userid:Userid
        })
        if(retrieveerror)throw retrieveerror
        return retrievedata;
    } catch (error) {
        console.error(error)
    }
}