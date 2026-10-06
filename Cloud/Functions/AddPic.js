import { supabase } from "../Authentication/AuthConnection.js";

export async function getpic(Bucket,Link) {
    try {
        const{data:image}=await supabase.storage
        .from(Bucket)
        .getPublicUrl(Link)
        console.log(image.publicUrl)
        return image.publicUrl
    } catch (error) {
        console.error(error)
    }
}

export async function AddPic(Bucket,Picture,Link) {
    try {
        const{data:image}=await supabase.storage
        .from(Bucket)
        .upload(Link,Picture,{
            cacheControl:'3600',
            upsert:true
        })
        if(image){
            const result=await getpic(Bucket,Link);
            return result;
        }
    } catch (error) {
        console.error(error)
    }
}