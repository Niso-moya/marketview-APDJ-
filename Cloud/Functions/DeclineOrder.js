import { supabase } from "../Authentication/AuthConnection.js"

export async function DeclineOrder(Orderid) {
    try {
        const{data:declinedata,error:declineerror}=await supabase.rpc('declineorder',{
            _orderid:Orderid
        })
        if(declineerror) throw declineerror
        return declinedata   
    } catch (error) {
        console.error(error)
    }
}