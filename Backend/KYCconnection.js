import { supabase } from "../Cloud/Authentication/AuthConnection.js"

export async function IdVerificationSessionId() {
    try {
        const{data:userdata,error:usererror}=await supabase.auth.getUser()
        const user=userdata.user
        if(usererror) throw usererror
        const response=await fetch('http://localhost:5000/verify-identity',{
            method:'POST',
            headers:
            {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Userid:user.id
            })
        })
        const sessiondata=await response.json()
        const{data:kycdata,error:kycerror}=await supabase.rpc('verifyuser',{
            _userid:user.id,
            _verificationid:sessiondata.id,
            _verified:true
        })
        if(kycerror)throw kycerror
        return {
            status:kycdata,
            Id:sessiondata.id,
            Url:sessiondata.url
        };
    } catch (error) {
        return (
            {
                status:'error'
            }
        )
    }
}