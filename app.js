import express from "express";
import {PORT} from './config/env.js';
const app = express();
app.get("/", (req, res)=>{
  res.send("hello world");
})

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
});

export default app;