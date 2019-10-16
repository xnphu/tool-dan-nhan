const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/data', async (req, res) => {
    var options = {
        method: 'GET',
        url: 'http://bangtin_xuhuong_api.ngrok.io/v1/data',
        headers:
        {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjU4ODc0NzUsImV4cCI6MTY1MjI4NzQ4MCwic3ViIjoidGhlb2RvaWJhb2NoaSJ9.M9I01fkn-Qu34UTR-9UkMIGC-QSG201T7Hcz4AQmR74',
            'Content-Type': 'application/json'
        },
        body: { timeframe: '172000' },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        data = []
        for (var index = 0; index < body.length; index++) {
            article = body[index]
            row = {};
            row['DT_RowId'] = article.id;
            row['title'] = article.title;
            row['href'] = article.href;
            row['newspaper'] = article.newspaper;
            row['category'] = article.category;
            row['sentimentality'] = article.sentimentality;
            row['id'] = article.id;
            data.push(row);
        }
        res.send(data);
    });

})

app.put('/table', async (req, res) => {
    var id = '';
    var new_sentimentality_value = '';
    for (var key in req.body.data) {
        id = key;
        new_sentimentality_value = req.body.data[key]['sentimentality'];
    }
    console.log(id);
    console.log(new_sentimentality_value);

    var putOptions = {
        method: 'POST',
        url: 'http://bangtin_xuhuong_api.ngrok.io/v1/data',
        headers:
        {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjU4ODc0NzUsImV4cCI6MTY1MjI4NzQ4MCwic3ViIjoidGhlb2RvaWJhb2NoaSJ9.M9I01fkn-Qu34UTR-9UkMIGC-QSG201T7Hcz4AQmR74',
            'Postman-Token': 'c2974346-60e9-4c2e-941e-2c01a5327583',
            'cache-control': 'no-cache',
            'Content-Type': 'application/json'
        },
        body: { id: id, sentimentality: new_sentimentality_value },
        json: true
    };

    request(putOptions, function (error, response, putBody) {
        if (error) throw new Error(error);
        else {
            console.log(putBody);
            console.log(req.body.data); 
            res.json({"data": [{"DT_RowId": key, "sentimentality": new_sentimentality_value}] });
        }

    }); 
    //To do: goi api de update du lieu
    // console.log(req.body.data)
})

app.use(express.static('public'));

app.listen(8080, (err) => {
    if (err) console.log(err)
    else console.log('Server is listening at port 8080');
});