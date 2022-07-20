const { log } = require('console');
const { application } = require('express');
const express = require('express');
const app = express();
app.use(express.json())
let fs = require('fs');

app.get('/students',(req, res) => {
    res.json({
        message:'Hello world'
    })
})

app.post('/datetime', function(req, res) {
    console.log(req.body);
    const result = req.body;
    let res_date = new Date();
    fs.writeFile(`./${result.filename}`,`${res_date}`,(err) =>{
    if(err) throw err;
})

    res.json({message:'File created successfully'})
})


app.listen(3000)