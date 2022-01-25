
import AnchorJS from 'anchor-js'
import Alpine from 'alpinejs'
import alpine_search from './modules/alpine_search'
import ClipboardJS from 'clipboard'
import tippy from 'tippy.js'

// -------------------
//  Anchor
// -------------------
const anchors = new AnchorJS();
anchors.add();


$(document).ready(function() {

	$('.collapse-trigger').click(function() {

		var target_id = $(this).attr('data-target');

		if (target_id) {
			var target = $(document).find('#' + target_id);

			$(target).toggleClass('collapsed');
		}
	});


	// adapted from https://stackoverflow.com/a/48078807/1217368
	$('.highlight > pre').each(function(i) {
		if (!$(this).parent().hasClass('no-select-button')) {

			// create an id for the current code section
			var currentId = "codeblock" + (i + 1);

			// find the code section and add the id to it
			var codeSection = $(this).find('code');
			codeSection.attr('id', currentId);

			// now create the button, setting the clipboard target to the id
			var btn = document.createElement('a');
			btn.setAttribute('type', 'button');
			btn.setAttribute('class', 'btn btn-copy-code');
			btn.setAttribute('data-clipboard-target', '#' + currentId);
			btn.innerHTML = '<i class="far fa-file-code fa-2x"></i>';
			this.insertBefore(btn, this.firstChild);

			// Create tooltip
			tippy(btn, {
				trigger: 'manual',
				content: "Copied!",
				placement: 'left',
			});
		}
	});

	var clipboard = new ClipboardJS('.btn-copy-code');

	// Attach callback to copy successful event.
	clipboard.on('success', function(event) {
		var tooltip = event.trigger._tippy;

		// Clear text selection.
		event.clearSelection();

		// Show tooltiop
		tooltip.show();

		// After 1 second, hide it again.
		setTimeout(function() {
			tooltip.hide();
		}, 1000, tooltip);
	});
});

// -------------------
// Alpine
// -------------------

Alpine.data('searchComponent', alpine_search)
Alpine.start()
