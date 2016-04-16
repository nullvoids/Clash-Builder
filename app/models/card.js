import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  imageUrl: DS.attr('string'),
  description: DS.attr('string'),
  stats: DS.attr('string'),
  decks: DS.hasMany('deck'),
  manaCost: DS.attr('number')
});
