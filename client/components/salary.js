Session.setDefault('brut', 1445.38);

Template.salary.helpers({
	amount: function() {
		return Session.get('brut');
	}
})
