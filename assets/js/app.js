$(function() {
	/*Menu nav toggle*/
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})

})