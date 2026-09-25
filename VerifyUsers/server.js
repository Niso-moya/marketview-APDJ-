require('dotenv').config();
const express=require("express")
const cors=require("cors")
const Stripe=require("stripe");
const stripe=Stripe(process.env.STRIPE_SECRET_KEY)
const app=express();
app.use(cors());
app.use(express.json());

app.post('/getverification',async (req,res)=>{
    const{sessionid}=req.body
    try {
        const session=await stripe.identity.verificationSessions.retrieve(sessionid);
        if(session.status==='verified'){
            return res.json({status:"Verified"})
        }
        return res.json({status:'NotVerified',session:session.status,details:session})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
})
app.post('/verify-identity', async (req, res) => {
    try {
        const{Userid}=req.body
        const session = await stripe.identity.verificationSessions.create({
            type: "document",
            options: {
                document: {
                    require_matching_selfie: true
                }
            },
            metadata: {
                UserId:Userid
            }
        });
        res.json({ url: session.url,id:session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
app.listen(5000,()=>{
    console.log("Server running ")
})
