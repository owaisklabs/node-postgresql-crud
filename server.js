const express = require('express');
const studentRoutes = require('./src/students/routes')
const app = express();
const port = 3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.use('/api/v1/students',studentRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
