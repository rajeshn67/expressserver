const express = require('express');
const app = express();
app.use("/Home", (req, res)=> {
  
     res.send('Hello from the server side... for home ');
});
app.use("/login", (req, res)=> {
  
    res.send('Hello from the server side... for login');
});
app.use("/dashboard", (req, res)=> {
  
    res.send('Hello from the server side... for dashboard');
});
app.listen(3000 ,()=> { 
    console.log('Server is running on port 3000');
});