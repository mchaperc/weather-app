import Ember from 'ember';

export default Ember.Component.extend({

	model: function() {
		return Ember.$.ajax('https://api.forecast.io/forecast/d635250544a43a8728090f437d22333f/'+params.lat+'/'+params.lng, 
			{dataType: 'jsonp'}).then(function(response) {
				console.log(response);
			});
	}

})