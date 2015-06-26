import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',

	init: function() {
		this._super();
		var temp = this.get('results.currently.temperature');
		temp = temp.toString().slice(0,2);
		this.set('results.currently.temperature', temp);
		var todayMaxTemp = this.get('results.daily.data.0.temperatureMax');
		// console.log(todayMaxTemp);
	},

	currentTemp: function() {
		return this.get('results.currently.temperature').toString().slice(0,2);
	}.property('results.@each'),

	todayMaxTemp: function () {
		return this.get('results.daily.data.0.temperatureMax').toString().slice(0,2);
	}.property('results.@each'),

	tomorrowConditions: function() {
		return this.get('results.daily.data.1.summary');
	}.property('results.@each')

});