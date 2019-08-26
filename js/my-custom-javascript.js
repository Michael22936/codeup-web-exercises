"use strict";

$(document).ready(function() {

    // alert('The page is done loading')
    //
    // var contents = $('#main').html();
    // alert(contents);
    //
    // var contents = $('#unorder').html();
    // alert(contents);
    //
    // $('.codeup').css('border', '1px solid red');

    // $('li').css('font-size', '20px');
    //
    // $('h1').css('background', '#ffcccc');
    //
    // $('li').css('background', '#ffcccc');
    //
    // $('p').css('background', '#ffcccc');
    //
    // var contents = $('#header').html();
    //     alert(contents);

    // $('h1, li, p').css('background', '#ffcccc');

    $('h1').click(function () {
        $(this).css('background-color', 'blue');
    });

    $('p').dblclick(function () {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function () {
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'black');
        }
    );
});

