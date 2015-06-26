import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',

	init: function() {
		this._super();
	},

	tempClass: function() {
		if (Number(this.get('currentTemp')) >= 90) {
			return 'hot';
		} else if (Number(this.get('currentTemp')) >= 70) {
			return 'warm';
		} else if (Number(this.get('currentTemp')) >= 50) {
			return 'cool';
		} else {
			return 'cold';
		}
	}.property('results.@each'),

    todayConditionClass: function() {
	  var conditions = {
	    'clear-day': 'wi-day-sunny',
	    'clear-night': 'wi-',
	    'rain': 'wi-rain',
	    'snow': 'wi-snow',
	    'sleet': 'wi-rain-mix',
	    'wind': 'wi-cloudy-gusts',
	    'fog': 'wi-fog',
	    'cloudy': 'wi-cloudy',
	    'partly-cloud-day': 'wi-cloudy',
	    'partly-cloudy-night': 'night-partly-cloudy',

	  };
	  return conditions[this.get('results.currently.icon')] || 'wi-day-sunny';
    }.property('results.currently.icon'),

    tomorrowConditionClass: function() {
	  var conditions = {
	    'clear-day': 'wi-day-sunny',
	    'clear-night': 'wi-',
	    'rain': 'wi-rain',
	    'snow': 'wi-snow',
	    'sleet': 'wi-rain-mix',
	    'wind': 'wi-cloudy-gusts',
	    'fog': 'wi-fog',
	    'cloudy': 'wi-cloudy',
	    'partly-cloud-day': 'wi-cloudy',
	    'partly-cloudy-night': 'night-partly-cloudy',

	  };
	  return conditions[this.get('results.daily.data.1.icon')] || 'wi-day-sunny';
    }.property('results.daily.data.1.icon'),

    // backgroundClass: "night-cloudy",

	backgroundClass: function() {
		var conditions = {
			'clear-day': 'clear',
		    'clear-night': 'night',
		    'rain': 'rainy',
		    'snow': 'snowy',
		    'sleet': 'sleet',
		    'wind': 'windy',
		    'fog': 'foggy',
		    'cloudy': 'cloudy',
		    'partly-cloud-day': 'cloudy',
		    'partly-cloudy-night': 'night-cloudy',
		}
		return conditions[this.get('results.currently.icon')] || '';
	}.property('results.currently.icon'),


	currentTemp: function() {
		return this.get('results.currently.temperature').toString().slice(0,2);
	}.property('results.@each'),

	todayMaxTemp: function () {
		return this.get('results.daily.data.0.temperatureMax').toString().slice(0,2);
	}.property('results.@each'),

	tomorrowConditions: function() {
		return this.get('results.daily.data.1.summary');
	}.property('results.@each'),

	tomorrowMaxTemp: function() {
		return this.get('results.daily.data.1.temperatureMax').toString().slice(0,2);
	}.property('results.@each'),

	tomorrowMinTemp: function() {
		return this.get('results.daily.data.1.temperatureMin').toString().slice(0,2);
	}.property('results.@each')

});