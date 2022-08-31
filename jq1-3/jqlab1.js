// Add id attribute into the second paragraph
const toka = $('p:eq(1)');
console.log(toka);
toka.attr('id', 'toka-p');

//Remove first paragraph
const eka = $('p:first');
eka.remove();

//Change the background color of the first div to grey and text color to white
$('#fdiv').css({
    backgroundColor: '#4c4a47',
    color: 'white'
});

//Define click event handler in your JavaScript file
$('#sdiv button').click(function () {
    $('#fdiv').append('<p id="tp">Hello User</p>');
});

//Hide 4p with jQuery
$('#4p').hide();

//jotain
$('#sdiv').hover(
    function () {
        $('#4p').show().text('I wanna be a cowboy');
    },
	function () {
        $('#4p').hide();
    }
);
