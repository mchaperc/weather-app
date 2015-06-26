import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',

	init: function() {
		this._super();
	},

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