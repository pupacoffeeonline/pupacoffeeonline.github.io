const express = require("express");
const cors = require("cors");
require("dotenv").config();
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req,res)=>{

  try{

    const response = await client.chat.completions.create({
      model:"gpt-4o-mini",
      messages:[
        {
          role:"system",
          content:`
You are Mocha, a Pup A Coffee support assistant.

Rules:
- Friendly café tone
- Short answers (2–6 sentences)
- Only talk about Pup A Coffee
- Products are dog-safe caffeine-free drinks
- Must be mixed with water or almond milk
- Pets must be 6+ months old
- USA only shipping
`
        },
        {
          role:"user",
          content:req.body.message
        }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  }catch(err){
    console.log(err);
    res.json({ reply:"AI error or server issue." });
  }

});

app.listen(3000, ()=>{
  console.log("Server running on http://localhost:3000");
});