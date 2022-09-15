$('button').click(function () {
    $('#advice').text('Select your favourite colour among the colours');
    $('#sel').text('Your favourite colours in order:');
    $('#img1').attr('src', 'blue.jpg').attr('alt', 'blue');
    $('#img2').attr('src', 'red.jpg').attr('alt', 'red');
    $('#img3').attr('src', 'yellow.jpg').attr('alt', 'yellow');
});

$('img').click(function () {
    $('#selection ul').append($('<li>' + $(this).attr('alt') + '</li>'));
    $(this).remove();
});