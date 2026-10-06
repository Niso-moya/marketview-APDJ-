import { supabase } from "../Authentication/AuthConnection.js";

export async function RetrieveProductUserDetails(Productid) {

    try {
        console.log(Productid)
        const {data:userid,error:usererror} =await supabase.rpc('getproductuserid',{
            _productid:Productid
        })
        console.log(userid)
        if(usererror) throw usererror
        const {data:retrievedata,error:retrieveerror}=await supabase.rpc('retrieveuserdetails',{
            _userid:userid
        })
        if(retrieveerror)throw retrieveerror
        return retrievedata;
    } catch (error) {
        console.error(error)
    }
}