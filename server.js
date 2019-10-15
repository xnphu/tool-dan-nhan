const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/data', (req, res) => {
    var data = [
        {
            "DT_RowId": "row_1",
            "stt": "1",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tích cực"
        }, {
            "DT_RowId": "row_2",
            "stt": "2",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tích cực"
        }, {
            "DT_RowId": "row_3",
            "stt": "3",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tích cực"
        }, {
            "DT_RowId": "row_4",
            "stt": "4",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tích cực"
        }, {
            "DT_RowId": "row_5",
            "stt": "5",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tích cực"
        }, {
            "DT_RowId": "row_6",
            "stt": "6",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tiêu cực"
        }, {
            "DT_RowId": "row_7",
            "stt": "7",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Trung tính"
        }, {
            "DT_RowId": "row_8",
            "stt": "8",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Trung tính"
        }, {
            "DT_RowId": "row_9",
            "stt": "9",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tiêu cực"
        }, {
            "DT_RowId": "row_10",
            "stt": "10",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tích cực"
        }, {
            "DT_RowId": "row_11",
            "stt": "11",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tích cực"
        }, {
            "DT_RowId": "row_12",
            "stt": "12",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Tiêu cực"
        }, {
            "DT_RowId": "row_13",
            "stt": "13",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Trung tính"
        },
        {
            "DT_RowId": "row_14",
            "stt": "14",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "Trung tính"
        }
    ]
    res.send(data);
});

app.put('/table', (req, res) => {
    var data = [
        {
            "DT_RowId": "row_3",
            "quality": "3"
        },
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
        var new_quality_value = '';
        for (var key in req.body.data) {
            id = key;
            new_quality_value = req.body.data[key]['quality'];
            break;
            //console.log(key, req.body.data[key]);
        }
        console.log(id);
        console.log(new_quality_value);

        for (var key2 in data) {
            if (data[key2]['DT_RowId']==id) {
                data[key2]['quality'] = new_quality_value;
                break;
            };
        }
        console.log(data)
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