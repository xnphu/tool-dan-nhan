$(document).ready(function () {
    var data = [
        {
            "DT_RowId": "row_1",
            "stt": "1",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_2",
            "stt": "2",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_3",
            "stt": "3",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_4",
            "stt": "4",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_5",
            "stt": "5",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_6",
            "stt": "6",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_7",
            "stt": "7",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_8",
            "stt": "8",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_9",
            "stt": "9",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_10",
            "stt": "10",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_11",
            "stt": "11",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_12",
            "stt": "12",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }, {
            "DT_RowId": "row_13",
            "stt": "13",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        },
        {
            "DT_RowId": "row_14",
            "stt": "14",
            "title": "\'No Control Air\'Cotton cardigan",
            "newspaper": "4800.00",
            "category": "1",
            "publish_date": "2014-03-13 04:17:16",
            "update_time": "17",
            "quality": "1"
        }
    ]
    create_article_table(data);
})

function create_article_table(article_list) {
    var dataset = article_list;

    var editor = new $.fn.dataTable.Editor({
        ajax: {
            type: "PUT",
            url:"http://localhost:8080/table"
        },
        table: "#article_table",
        fields: [{
            label: "Chất lượng:",
            name: "quality",
            type: "select",
            options: [
                { label: "Tích cực", value: 'positive' },
                { label: "Trung tính", value: 'neutral' },
                { label: "Tiêu cực", value: 'negative' },
            ]
        }]
    });

    // Activate an inline edit on click of a table cell
    $('#article_table').on('click', 'tbody td:not(:first-child)', function (event) {
        editor.inline(this);
    });

    $('#article_table').DataTable({
        processing: true,
        serverSide: false,
        dom: "Bfrtip",
        data: dataset,
        columns: [
            { title: "STT", data: "stt", "searchable": false, className: "min-desktop" },
            { title: "Tên bài", data: "title", "searchable": true, className: "all" },
            { title: "Nguồn báo", data: "newspaper", "searchable": false, className: "min-desktop" },
            { title: "Chủ đề", data: "category", "searchable": false, className: "min-desktop" },
            { title: "Ngày xuất bản", data: "publish_date", "searchable": false, className: "min-desktop" },
            { title: "Cập nhật", data: "update_time", "searchable": false, className: "min-desktop" },
            { title: "Chất lượng", data: "quality", "searchable": false, className: "min-desktop" }
        ],
        "rowCallback": function (row, data, index) {
            topic = $('td:eq(1)', row).html();
            $('td:eq(1)', row).html('<a href="' + data.href + '" target="_blank">' + topic + '</a>');
            sentimentality = $('td:eq(6)', row).html();
            $('td:eq(6)', row).html('<select value="' + data.quality + '"> <option value="positive"> Tích cực </option> <option value="negative"> Tiêu cực </option> <option value="neutral"> Trung tính </option></select>');
        },
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "edit",   editor: editor }
        ],
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 1 },
            { responsivePriority: 2, targets: 2 }
        ],
        nowrap: false,
        "pageLength": 10,
        paging: true,
    });
    
}

