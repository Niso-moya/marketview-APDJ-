import { supabase } from "../Authentication/AuthConnection";

export async function AcceptOrder(Orderid) {
    try {
        const{data:acceptdata,error:accepterror}=await supabase.rpc('acceptproductorder',{
            _orderid:Orderid
        })
        if(accepterror) throw accepterror
        return acceptdata   
    } catch (error) {
        console.error(error)
    }
}