const getPaginationTable = () => {
    $(document).ready(function () {
        var totalRows = $('#employeesContainer').find('tbody tr:has(td)').length;
        var recordPerPage = 5;
        var totalPages = Math.ceil(totalRows / recordPerPage);
        var $pages = $('<div class="pages"></div>');
        // Adding span do show pagination na deleting additional pagination to have only one
        for (i = 0; i < totalPages; i++) {
            $('<span>  ' + (i + 1) + '</span>').appendTo($pages);
        }
        if (document.getElementsByClassName("pages").length > 0) {
            $(".pages").empty();
        }

        
        $pages.appendTo('#employeesContainer');
        $('.pageNumber').hover(function () {
            $(this).addClass('focus');
        }, function () {
            $(this).removeClass('focus');
        });
        $('table').find('tbody tr:has(td)').hide();
        var tr = $('table tbody tr:has(td)');
        for (var i = 0; i <= recordPerPage - 1; i++) {
            $(tr[i]).show();
        }

        $('span').click(function (event) {
            $('#employeesContainer').find('tbody tr:has(td)').hide();
            var nBegin = ($(this).text() - 1) * recordPerPage;
            var nEnd = $(this).text() * recordPerPage - 1;
            for (var i = nBegin; i <= nEnd; i++) {
                $(tr[i]).show();
            }
        });


    });
}