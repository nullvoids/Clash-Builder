import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			cards: this.store.findAll('card'),
			deck: this.store.createRecord('deck'),
			post: this.store.createRecord('post')
		})
	}

});





// import Ember from 'ember';

// export default Ember.Route.extend({
// 	model() {
// 		return this.store.findAll('card')
// 	},
// 	numSelected: 0,
// 	canAddMore: Ember.computed.lt('numSelected', 8),
// 	actions: {
// 		chooseCardForDeck( card ) {
// 			var selectedCards = this.controller.get('selectedCards');
// 			if ( card.isSelected ) {
// 				card.set('isSelected', false);
// 				this.decrementProperty('numSelected');
// 				var index = selectedCards.indexOf(card);
// 				selectedCards.removeAt(index);
// 			} else if ( this.get('canAddMore') ) {
// 				card.set('isSelected', true);
// 				selectedCards.pushObject(card);
// 				this.incrementProperty('numSelected')
// 			} 
// 			this.controller.set('selectedCards', selectedCards);
// 		}
// 	}
// });