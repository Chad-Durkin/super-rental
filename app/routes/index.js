import Ember from 'ember';

var index = 'index';


export default Ember.Route.extend({
  model() {
    return {rental: this.store.findAll('rental'), announcement: this.store.findAll('announcement')};
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo(index);
    }
  }
});
