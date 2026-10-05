import { supabase } from "./AuthConnection.js";

export async function AddUserDetails(Name,Surname,Username,UserType) {
    try {
        const {data:userdata,error:usererror}=await supabase.auth.getUser()
        const user=userdata.user
        if(usererror) throw usererror
        const {data:adddetails,error:adddetailserror}=await supabase.rpc('adduserdetails',{
              _name:Name,
              _surname:Surname,
              _username:Username,
              _userid:user.id,
              _usertype:UserType
        })
        if(adddetailserror) throw adddetailserror
        return({
            data:adddetails,
            status:'successful'
        })
    } catch (error) {
        return({
            error:error,
            status:'error'
        })
    }
}