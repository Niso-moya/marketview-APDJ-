import { supabase } from "../Authentication/AuthConnection.js";

export async function SendMessage(RecievingUser,Message) {
    try {
        const{data:userdata,error:usererror}=await supabase.auth.getUser()
        const user=userdata.user
        if(usererror) throw usererror
        const{data:senddata,error:senderror}=await supabase.rpc('sendmessage',{
            _sendinguser:user.id,
            _recievinguser:RecievingUser,
            _message:Message
        })
        if(senderror) throw senderror
        return senddata
    } catch (error) {
        console.error(error)
    }
}