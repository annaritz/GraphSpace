$(document).ready(function() {

	
	// $("span").click(function() {
	// 	$(this).text($("#graphname").val());
	// });

	// $("#graphname").on('change', function() {
	// 	$("#filename").text($(this).val());
	// 	$("#graphname").val($(this).val());
	// });

	$("#upload_graph").click(function(e) {
		e.preventDefault();

		var email = $("#email").val();
		var graph = $("#graphname").val();

		console.log($("#graphname").val());
		if (graph.length == 0) {
			return alert("Please enter a graph under the cyjs standard");
		}

		$("#upload_form").submit();
	});



});