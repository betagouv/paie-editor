Session.setDefault('brut', 1445.38);
Session.setDefault('superbrut', 2250);
Session.setDefault('weeklyHours', 40);

Template.body.events({
	'keyup [name="brut"]': function(event, template) {
		Session.set('brut', event.target.value.replace(',', '.'));

		Object.keys(Taxes.fr).forEach(function(openfiscaCode) {
			Meteor.call('openfisca',
				openfiscaCode,
				{ salbrut: Number(Session.get('brut')) },
				function(error, result) {
					if (error)
						console.error(error);

					Session.set(openfiscaCode, result.data.value);
				}
			);
		})
	},

	'keyup [name="weeklyHours"]': function(event, template) {
		Session.set('weeklyHours', event.target.value);
	}
});


var HOURS_IN_A_MONTH = 151.67,
	WEEKS_IN_A_MONTH = 4.2,
	INDIE_TAX_RATIO = 0.2;

Template.body.helpers({
	brut: function() {
		return	Session.get('brut');
	},

	superbrut: function() {
		return	Session.get('superbrut');
	},

	superbrutHoraire: function() {
		return	Session.get('superbrut')
				/ HOURS_IN_A_MONTH;
	},

	mensuel: function() {
		return	Session.get('superbrut')
				/ HOURS_IN_A_MONTH
				* Session.get('weeklyHours')
				* WEEKS_IN_A_MONTH
				* (1 - INDIE_TAX_RATIO);
	},

	weeklyHours: function() {
		return	Session.get('weeklyHours');
	}
});
