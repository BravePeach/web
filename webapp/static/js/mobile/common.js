city_list = [];

function submit_enroll_form(){
    $("#id_city").val(city_list.join());
    $("#enroll-form").submit();
}

function fixTripButton() {
    var container = $('.enroll-trip-button');
    var maxTop = $('footer').offset().top - container.outerHeight() - 20;
    var scrollVal = $(document).scrollTop() + $(window).height() - 80;

    if (scrollVal > maxTop) {
        container.css('top', maxTop);
    }

    else {
        container.stop().animate({top: scrollVal},'100');
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$(function(){
    var csrftoken = getCookie('csrftoken');

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    fixTripButton();
    $('.enroll-trip-button').fadeIn('slow');
    $(document).scroll(function() {
        fixTripButton();
    });

    $("#id_city").placecomplete({
        tags: true,
        requestParams: {
            types: ["(regions)"]
        }
    });

    $("#id_city").on({
        'placecomplete:selected': function (evt, placeResult) {
            console.log(placeResult);
            city_list.push(placeResult['name']);
            console.log(city_list);
            localStorage.setItem("city_list",city_list);
        },
        'placecomplete:cleared': function() {
            city_list.pop();
            console.log(city_list)
            localStorage.setItem("city_list",city_list);
        }
    });

    $('.datepicker1, .datepicker2').datepicker({
        showAnim: "slideDown",
        minDate: 0,
        dateFormat: 'yy.mm.dd',
        prevText: '<',
        nextText: '>',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        dayNamesShort: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        dayNamesMin: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        onSelect: function () {
            var date1 = $('.datepicker1').datepicker('getDate');
            var date = new Date(Date.parse(date1));
            date.setDate(date.getDate() + 1);
            var newDate = date.toDateString();
            newDate = new Date(Date.parse(newDate));
            $('.datepicker2').datepicker("option", "minDate", newDate);
            if ($('#start_date_form').val() && $('#end_date_form').val()) {
                filterGuide($('.order-active').attr('id'));
            }
        },
        onClose: function () {
            if ($('.datepicker1').val() && !$('.datepicker2').val()) {
                $('.datepicker2').datepicker("show")
            }
        }
    });
// 인원 증가
    var total_traveler = 0;

    $('.increase_button').click(function () {
        $('span:first-child', $(this).parent('div')).html(function (i, val) {
            return parseInt(val.slice(0, -1)) + 1 + '명'
        });
        total_traveler++;
        $('#traveler_cnt_main, #traveler_cnt_form, #id_age_group').attr('value', '인원 ' + total_traveler + '명')
    });

    $('.decrease_button').click(function () {
        $('span:first-child', $(this).parent('div')).html(function (i, val) {
            if (val[0] == 0) {
                return
            }
            total_traveler--;
            $('#traveler_cnt_main, #traveler_cnt_form, #id_age_group').attr('value', '인원 ' + total_traveler + '명');
            return parseInt(val.slice(0, -1)) - 1 + '명'
        });
    });

    $('.traveler_cnt_main').click(function(event){
        event.stopPropagation();
         $(".traveler_cntpicker").slideToggle("fast");
    });
    $(".traveler_cntpicker").on("click", function (event) {
        event.stopPropagation();
    });


});
