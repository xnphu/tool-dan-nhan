const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.put('/table', (req, res) => {
    var data = [
        {
            "DT_RowId": "row_1",
            "quality": "1"
        }, 
        {
            "DT_RowId": "row_2",
            "quality": "2"
        }
    ]
    if (req) {
        var id = '';
        var quality_value = '';
        for (var key in req.body.data) {
            id = key;
            quality_value = req.body.data[key]['quality'];
            break;
            //console.log(key, req.body.data[key]);
        }
        console.log(id);
        console.log(quality_value);
        res.json({success: "ok"})
        //To do: goi api de update du lieu
        // console.log(req.body.data)
    }
})

app.use(express.static('public'));

app.listen(8080, (err) => {
    if(err) console.log(err)
    else console.log('Server is listening at port 8080');
});