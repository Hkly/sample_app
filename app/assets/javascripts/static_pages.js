//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function(){
	function updateCountdown(){
		var count = 140 - $('#micropost_content').val().length;
		$('#count_down').text(count + ' characters remaining')
	}


	
	updateCountdown();
	$('#micropost_content').change(updateCountdown);
	$('#micropost_content').keyup(updateCountdown);
	
	
	
	})