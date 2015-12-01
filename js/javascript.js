// JavaScript Document
var animal_list;
var dier;
function focus()
{
	$('#namelen').removeClass('hidden');	
}
function blur()
{
	$('#regnr').addClass('hidden');
	$('#namelen').addClass('hidden');
	$('#age').addClass('hidden');
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
	/*if(localStorage.getItem( 'Kat' ) != null)
	{
		window.alert(localStorage.getItem( 'Kat' ));
	}
	if(localStorage.getItem( 'Hond' ) != null)
	{
		window.alert(localStorage.getItem( 'Hond' ));
	}*/
	animal_list = JSON.parse(localStorage.getItem('animal_list'));
	if (!Array.isArray(animal_list))
	{
  		animal_list = [];
		localStorage.setItem('animal_list', JSON.stringify(animal_list));
		window.alert('gelukt');
	}
	else
	{
		for (var i = 0; i < animal_list.length; ++i) 
		{
			var animal = animal_list[i];
			window.alert(JSON.stringify(animal));
  		}
	}
}

$(document).ready(OnReady);

function OnSubmit(event) 
{
	animal_list = JSON.parse(localStorage.getItem('animal_list'));
	blur();
	var animal= {}; 
	  animal.species =  $('input[name=type]:checked').val();
	  animal.name=     $('#naam').val();
	  animal.age=      $('#leeftijd').val();
	  animal.regnr=   $('#registrationnumber').val();
	  animal.reserved= $('#status').is(':checked');
	  
	if(animal.regnr.substring(0, 1) != "0" && animal.regnr != "")
	{
		event.preventDefault();
		$('#regnr').removeClass('hidden');
	}
	else if(animal.name.length < 1)
	{
		event.preventDefault();
		$('#namelen').removeClass('hidden');
	}
	else if(animal.age != 'undefined' && animal.age < 1)
	{
		event.preventDefault();
		$('#age').removeClass('hidden');
	}
	else
	{
		blur();
	}
	if(animal.species == "Kat")
	{
		var Kat = JSON.stringify(animal); //Kat data omzetten naar string values
		localStorage.setItem('Kat', Kat); //Item toevoegen aan local storage
		console.log(Kat);

		dier = JSON.parse( localStorage.getItem( 'Kat' ) ); //van string object maken
		console.log(dier);
		animal_list.push(dier);
		window.alert("Het dier is een kat!");
		console.log(dier);
	}
		if(animal.species == "Hond")
	{
		var Hond = JSON.stringify(animal);
		localStorage.setItem('Hond', Hond);
		
		dier = JSON.parse( localStorage.getItem( 'Hond' ) );
		console.log(dier.name);
		animal_list.push(dier);
		window.alert("het dier is een Hond!");
	}
	console.log(animal.reserved);
	localStorage.setItem('animal_list', JSON.stringify(animal_list));
}

