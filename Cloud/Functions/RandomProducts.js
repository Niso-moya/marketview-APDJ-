import { supabase } from "../Authentication/AuthConnection.js";

export async function RandomProducts() {
    try {
        const{data:randomdata,error:randomerror}=await supabase.rpc('randomproductsuggestion')
        if(randomerror) throw randomerror
        return randomdata   
    } catch (error) {
        console.error(error)
    }
}