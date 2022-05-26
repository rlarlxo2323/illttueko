jQuery(document).ready(function($) {
    $('#user-table').DataTable({
        retrieve: true,
        paging: true,
        responsive: true,
        "autoWidth": false,
    });
    var table = $('#user-table').DataTable();
    $('#user-table tbody').on('click', 'tr', function () {
        //console.log(table.row(this).data());
        $(".modal-body div span").text("");
        $(".no span").text(table.row(this).data()[0]);
        $(".studentid span").text(table.row(this).data()[1]);
        $(".name span").text(table.row(this).data()[2]);
        $(".phone span").text(table.row(this).data()[3]);
        $(".email span").text(table.row(this).data()[4]);
        $(".red span").text(table.row(this).data()[5]);
        $("#myModal").modal("show");
    });


} );

jQuery(document).ready(function($) {
    $('#book-table').DataTable({
        retrieve: true,
        paging: true,
        responsive: true,
        "autoWidth": false
    });
    var table = $('#book-table').DataTable();
    $('#book-table tbody').on('click', 'tr td:not(:nth-child(n+6))', function () {
        //console.log(table.row(this).data());
        $(".modal-body div span").text("");
        $(".no span").text(table.row(this).data()[0]);
        $(".lab span").text(table.row(this).data()[1]);
        $(".stateTime span").text(table.row(this).data()[2]);
        $(".endTime span").text(table.row(this).data()[3]);
        $(".confirmState span").text(table.row(this).data()[4]);
        $("#book-info").modal("show");
    });
} );

jQuery(document).ready(function($) {
    $('#inquiry-table').DataTable({
        retrieve: true,
        paging: true,
        responsive: true,
        "autoWidth": false
    });
    var table = $('#inquiry-table').DataTable();
    $('#inquiry-table tbody').on('click', 'tr', function () {
        $(".modal-body div span").text("");
        $(".no span").text(table.row(this).data()[0]);
        $(".date span").text(table.row(this).data()[1]);
        $(".time span").text(table.row(this).data()[2]);
        $(".stuNum span").text(table.row(this).data()[3]);
        $(".name span").text(table.row(this).data()[4]);
        $(".lab span").text(table.row(this).data()[5]);
        $(".seat span").text(table.row(this).data()[6]);
        $(".contents span").text(table.row(this).data()[7]);
        $("#inquiry-info").modal("show");
        $('#processState').val(table.row(this).data()[8]).prop("selected",true);
    });
} );

jQuery(document).ready(function($) {
    $('#seminar-table').DataTable({
        retrieve: true,
        paging: true,
        responsive: true,
        "autoWidth": false
    });
} );

$(document).ready(function($) {
    $('#manageRsv-table').DataTable({
        "dom": 'frtip',
        "autoWidth": false,
    });

    var table = $('#manageRsv-table').DataTable();
    table.page.len(8).draw();

    $(".tbtn").click(function (){

        if ($(this).text() === "미승인"){
            $(this).text("승인");
        }else{
            $(this).text("미승인");
        }
    })
});