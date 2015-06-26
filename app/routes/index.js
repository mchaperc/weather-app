import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return new Promise(function(resolve, reject) { 
  			navigator.geolocation.getCurrentPosition(resolve, reject);
		}).then(function(position) {
			return position.coords;
		});
	},

	actions: {
		search: function(locale) {
			this.transitionTo('search', locale);
		}
	}

})