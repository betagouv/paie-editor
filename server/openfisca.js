Meteor.methods({
	openfisca: function(requested, queryString) {
		var get = Meteor.wrapAsync(HTTP.get, HTTP);

		return get('http://api-test.openfisca.fr/api/1/formula/' + requested + '?' + queryString);
	}
});
