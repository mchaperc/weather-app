import Ember from 'ember';

export default Ember.Route.extend({	
	model: function(params) {
		return Ember.$.ajax('https://api.forecast.io/forecast/d635250544a43a8728090f437d22333f/'+params.lat+','+params.lng, 
			{dataType: 'jsonp'}).then(function(response) {
				return response;
			});
	}
});
