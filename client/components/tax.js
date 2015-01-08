Template.tax.helpers({
	updating: function() {
		return Session.get(this.code + '-updating');
	},
	amount: function() {
		return Session.get(this.code);
	}
})
