import { supabase } from "../Authentication/AuthConnection";

export async function AddProduct(ProductName,ProductPrice,ProductDescription,Address,City,MediaLink,Country) {
    
    try {
       const{data:userdata,error:usererror}=await supabase.auth.getUser()
       if(usererror) throw usererror
       const user=userdata.user
       const{data:addproductdata,error:addproducterror}=await supabase.rpc('addproduct',{
          _productname:ProductName,
          _productprice:ProductPrice,
          _userid:user.id,
          _productdescription:ProductDescription,
          _address:Address,
          _city:City,
          _medialink:MediaLink,
          _country:Country
       }) 
       if(addproducterror)throw addproducterror
       return addproductdata
    } catch (error) {
        console.error(error)
    }
}