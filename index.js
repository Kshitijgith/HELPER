const express=require('express');
const cors=require('cors');
const app=express();
const dotenv=require(dotenv)
dotenv.config();
app.use(express.json());
app.use(cors({
  origin: '*', // Step 3: Allow your frontend origin
  credentials: true, // Optional: If you are using cookies
}));
app.get('/',(req,res)=>{
res.json({message:'Welcome'})
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});



