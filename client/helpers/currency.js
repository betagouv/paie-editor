Template.registerHelper('currency', function formatAsCurrency(val) {
	return Number(val).toFixed(2);
});
