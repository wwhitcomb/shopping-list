var singleState = {
	items: []
};

var addItemToState = function(state, item) {
	state.items.splice(0,1,item);
};

var addItemToPage = function(state, element) {
		var itemHTML = state.items.map(function(item) {
			return '<li>' +
					'<span class="shopping-item">' + item + '</span>' +
					'<div class="shopping-item-controls">' +
						'<button class="shopping-item-toggle">' +
							'<span class="button-label">' + 'check' + '</span>' +
						'</button>' + " " +
						'<button class="shopping-item-delete">' +
							'<span class="button-label">' + 'delete' + '</span>' +
						'</button>' +
					'</div>' +
				'</li>'
		});
	element.append(itemHTML);
};

$("#js-shopping-list-form").submit(function(event) {
	event.preventDefault();
	addItemToState(singleState, $("#shopping-list-entry").val());
	addItemToPage(singleState, $("ul"));
});

$("ul").on('click', 'button.shopping-item-toggle', function(event) {
	event.preventDefault();
	$(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
});

$("ul").on('click', 'button.shopping-item-delete', function(event) {
	event.preventDefault();
	$(this).closest('li').remove();
});
