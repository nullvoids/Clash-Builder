import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  cards: DS.hasMany('card'),
  manaCosts: Ember.computed.mapBy('cards', 'manaCost'),
  totalManaCost: Ember.computed.sum('manaCosts'),
  post: DS.belongsTo('post'),
  averageManaCost: Ember.computed('totalManaCost', function(){
  	var avg = (this.get('totalManaCost') / 8);
  	return (Math.round(avg * 10) / 10);
  })
});
