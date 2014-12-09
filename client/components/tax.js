Template.tax.helpers({
	amount: function() {
		return Session.get(this.code);
	}
})
