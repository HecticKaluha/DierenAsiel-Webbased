// JavaScript Document
function focus()
{
	$('form p').removeClass('hidden');	
}
function blur()
{
	$('form p').addClass('hidden');	
}
function OnReady() 
{
 	console.log('Pagina geladen, DOM klaar voor gebruik.');
	$('#naam').focus(focus);
	$('#naam').blur(blur);
}

$(document).ready(OnReady);
