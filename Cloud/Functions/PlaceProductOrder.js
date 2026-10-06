import { supabase } from "../Authentication/AuthConnection.js";

export async function PlaceProductOrder(Productid, Address, City, Country) {
    try {
        const { data: userdata, error: usererror } =
            await supabase.auth.getUser();

        if (usererror) throw usererror;

        const user = userdata.user;

        console.log(user);

        const { data: placedata, error: placeerror } =
            await supabase.rpc("placeproductorder", {
                _requestinguser: user.id,
                _productid: Productid,
                _address: Address,
                _city: City,
                _country: Country
            });

        if (placeerror) throw placeerror;

        return placedata;

    } catch (error) {
        console.error(error);
        throw error;
    }
}