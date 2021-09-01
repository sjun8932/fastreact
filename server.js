const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers',(req,res) => {
    res.send([
        {
            'id' : '1',
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '곽민선',
            'birthday' : '920304',
            'gender' : 'Women',
            'job' : '아나운서',
        },
        {
            'id' : '2',
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '이수날',
            'birthday' : '930403',
            'gender' : 'Women',
            'job' : '유튜버',
        },
        {
            'id' : '3',
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '서현숙',
            'birthday' : '940422',
            'gender' : 'Women',
            'job' : '치어리더',
        }
    ]);
});

app.listen(port, ()=> console.log(`${port}번 서버가 작동중 입니다~ Happy~~`))
