import Ember from 'ember';

export default Ember.Controller.extend({
		numSelected: 0,
		canAddMore: Ember.computed.lt('numSelected', 8),
		selectedCards: [],
		actions: {
			chooseCardForDeck( card ) {
				if ( card.isSelected ) {
					card.set('isSelected', false);
					this.decrementProperty('numSelected');
					var index = this.get('selectedCards').indexOf(card);
					this.get('selectedCards').removeAt(index);
				} else if ( this.get('canAddMore') ) {
					card.set('isSelected', true);
					this.get('selectedCards').pushObject(card);
					this.incrementProperty('numSelected')
				} 
			}
		}
});
