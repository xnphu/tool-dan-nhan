$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/data",
        type: "GET",
        success: function(data) {
            console.log(data)
            create_article_table(data);
        }
    })
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
            label: "Sắc thái:",
            name: "sentimentality",
            type: "select",
            options: [
                { label: "Tích cực", value: 'positive' },
                { label: "Trung tính", value: 'neutral' },
                { label: "Tiêu cực", value: 'negative' },
            ]
        }]
    });

    $('#article_table').on('click', 'tbody td:not(:first-child)', function (event) {
        // editor.inline(this);
    });

    $('#article_table').DataTable({
        processing: true,
        serverSide: false,
        dom: "Bfrtip",
        data: dataset,
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { title: "Tên bài", data: "title", "searchable": true, className: "all" },
            { title: "Nguồn báo", data: "newspaper", "searchable": false, className: "min-desktop" },
            { title: "Chủ đề", data: "category", "searchable": false, className: "min-desktop" },
            { title: "Sắc thái", data: "sentimentality", "searchable": false, className: "min-desktop" }
        ],
        "rowCallback": function (row, data, index) {
            topic = $('td:eq(0)', row).html();
            $('td:eq(0)', row).html('<a href="' + data.href + '" target="_blank">' + topic + '</a>');
            // sentimentality = $('td:eq(6)', row).html();
            // $('td:eq(6)', row).html('<select value="' + data.quality + '"> <option value="positive"> Tích cực </option> <option value="negative"> Tiêu cực </option> <option value="neutral"> Trung tính </option></select>');
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
        "pageLength": 100,
        paging: false,
        "bSort": false
    });
}

