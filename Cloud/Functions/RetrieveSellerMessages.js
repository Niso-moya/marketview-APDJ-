import { supabase } from "../Authentication/AuthConnection.js";

export async function RetrieveSellerMessages() {
    try {
        const { data: userdata, error: usererror } = await supabase.auth.getUser();
        if (usererror) throw usererror;
        
        const user = userdata?.user;
        if (!user || !user.id) {
            console.warn("RetrieveSellerMessages: No active user session found.");
            return [];
        }

        // Dedicated seller query: fetch messages where the logged-in user is the recipient
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq('RecievingUser', user.id)
            .order('created_at', { ascending: false });

        if (error) throw error;

        console.log("Successfully fetched seller messages for user ID:", user.id, data);
        return data || [];
    } catch (err) {
        console.error("RetrieveSellerMessages Error:", err);
        return [];
    }
}