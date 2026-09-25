import { supabase } from "../Authentication/AuthConnection";

export async function Products() {
    try {
        const{data:randomdata,error:randomerror}=await supabase.rpc('randomproductsuggestion')
        if(randomerror) throw randomerror
        return randomdata   
    } catch (error) {
        console.error(error)
    }
}