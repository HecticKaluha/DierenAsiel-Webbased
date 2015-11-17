// JavaScript Document
function focus()
{
	$('form p').removeClass('hidden');	
}
function blur()
{
	$('form p').addClass('hidden');	
}
function checkform()
{
	
}
function OnReady() 
{
 	console.log('Pagina geladen, DOM klaar voor gebruik.');
	$('#naam').focus(focus);
	$('#naam').blur(blur);
	$('#btn').click(OnSubmit);
}

$(document).ready(OnReady);

function OnSubmit(event) 
{
	var animal = 
	{
	  'species':  $('input[name=type]:checked').val(),
	  'name':     $('#naam').val(),
	  'age':      $('#leeftijd').val(),
	  'regnr':    $('#registrationnumber').val(),
	  'reserved': $('#status').is(':checked')
	};
	//fix!!!!1
	if(animal.name.length == 0)
	{
		event.preventDefault();
		console.log('Het formulier is niet verzonden. De naam heeft 0 karakters');
		focus();
	}
	if(animal.age != 'undefined' && animal.age <= 0)
	{
		event.preventDefault();
		console.log('De leeftijd van het dier moet groter zijn dan 0');
				console.log(animal.name);
	}
	if(animal.regnr != 'undefined' && animal.regnr.substring(0, 1) != 0)
	{
		event.preventDefault();
		console.log('Het eerste nummer van hetregistrationnummer moet gelijk zijn aan 0');
		//insert message
	}
	else
	{
		console.log('Het formulier is verzonden. De naam heeft ' + animal.name.length + ' karakters');
		blur();
	}	
	//Fix!!!!	
}

