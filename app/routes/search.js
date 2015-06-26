import Ember from 'ember';

export default Ember.Route.extend({

	model: function(params) {
		console.log(params);
		return Ember.$.ajax('https://maps.googleapis.com/maps/api/geocode/json?address='+params.locale+'&components=locality&components=postal_code&key=AIzaSyBReaFDIXZdjBWiwMAr9-AT2Evzt5myVc8').then(function(response) {
			// return response.results;
			console.log(response);
		})
	}

});