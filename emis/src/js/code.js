console.log('Hey im working!');
var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});
// ajax

// function call() {
//     var msg   = $('#formCall').serialize();
//      $.ajax({
//        type: 'POST',
//        url: "controller.php",
//        data: msg,
//        success: function(data) {
//          $('#results').html(data);
//        },
//        error:  function(xhr, str){
//      alert('Возникла ошибка: ' + xhr.responseCode);
//        }
//      });

//  }
$(document).ready(function(){
	$('#quesform').submit(function(event){
			event.preventDefault();
			$.ajax({
				url:'controller.php',
				type:'post',
				data:  $('#quesform').serialize(),
				success: function(result){
					alert(result);
				}

			});
	});
});