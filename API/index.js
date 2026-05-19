const express= require('express');
const {Pool}= require('pg');
const cor=require('cors');
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cor());

const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized : false
    }
}); // TOP

// CREATE API HERE

app.get('/',async(requestAnimationFrame,res)=>{
    try {

        const result = await pool.query(`select * from regions;`);
        res.json(result.rows);
        
    } catch (err) {
        res.status(500).json({error:err.message});
        
    }
})
// BOTTOM
const PORT =  3030;
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});