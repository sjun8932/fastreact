const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req,res) => {
    res.send({message: '반가워요 익스프레스를 구동했어요 🤣🤣🤣🤣🤣'});
});

app.listen(port, ()=> console.log(`${port}번 서버가 작동중 입니다~ Happy~~`))
