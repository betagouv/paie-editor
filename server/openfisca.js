Meteor.methods({
	openfisca: function(requested, data) {
		var get = Meteor.wrapAsync(HTTP.get);

		return get('http://api-test.openfisca.fr/api/1/formula/' + requested, { params: data });
	}
});
