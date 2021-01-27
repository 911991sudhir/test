$(document).ready(function(){
   
   $(".navbar-nav li a").on("click", function(e) {
		  $(".navbar-nav li a").removeClass("activemenu");
		  $(this).addClass("activemenu");
	});					
	
	$('#myAlert1').on('closed.bs.alert', function () {
			console.log("BS4");
	})
});


var myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', function () {
	console.log("BS5");
})
	
	


