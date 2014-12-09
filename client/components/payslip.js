Template.payslip.helpers({
	/** Convert Taxes.fr into a Blaze-enumerable array, until https://github.com/meteor/meteor/issues/2194 is fixed.
	*/
	taxes: function() {
		var result = [];

		for (var openfiscaCode in Taxes.fr) {
			if (! Taxes.fr.hasOwnProperty(openfiscaCode))
				continue;

			result.push({
				code: openfiscaCode,
				name: Taxes.fr[openfiscaCode].name
			});
		}

		return result;
	}
});
