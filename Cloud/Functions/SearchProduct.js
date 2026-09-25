import { supabase } from "../Authentication/AuthConnection"

export async function SearchProduct(Searchtext) {
    try {
       const{data:searchproductdata,error:searchproducterror}=await supabase.rpc('searchproduct',{
        _searchtext:Searchtext
       })
       if(searchproducterror) throw searchproducterror
       return searchproductdata
    } catch (error) {
        console.error(error)
    }
}