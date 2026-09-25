import { supabase } from "../Authentication/AuthConnection";

export async function FinishOrder(Orderid) {
    try {
        const{data:finishdata,error:finisherror}=await supabase.rpc('finishorder',{
            _orderid:Orderid
        })
        if(finisherror) throw finisherror
        return finishdata  
    } catch (error) {
        console.error(error)
    }
}