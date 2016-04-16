import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  deck: DS.belongsTo('deck'),
  comments: DS.hasMany('comments'),
  upvotes: DS.hasMany('upvotes'),
  downvotes: DS.hasMany('downvotes')
});
