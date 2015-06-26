import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',

	init: function() {
		this._super();
		var temp = this.get('results.currently.temperature');
		temp = temp.toString().slice(0,2);
		this.set('results.currently.temperature', temp);
	}

});