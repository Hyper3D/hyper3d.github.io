$(function() {

	/* Sidebar scrollbar */
	$('#sidebar').mCustomScrollbar({
		theme: "minimal-dark"
	});

	function relayout()
	{
		$('#sidebar .mCSB_container').css({
			"padding-top": $(window).height() * 0.1
		});
	}

	relayout();
	$(window).resize(relayout);

});
