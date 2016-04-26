import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    nextMonth(year, month) { 
		month = parseInt(month) + 1;
		if ( month > 12 ) {
			month = 1;
			year++;
		}
		this.transitionToRoute('/calendar/' + year + '/' + month + '/');
    },

	prevMonth(year, month) { 
		month = parseInt(month) - 1;
		if ( month <= 0 ) {
			month = 12;
			year--;
		}
		this.transitionToRoute('/calendar/' + year + '/' + month + '/');
    },
    
    today() {
    	let month = new Date().getMonth() + 1;
    	this.transitionToRoute('/calendar/' + new Date().getFullYear() + '/' + month + '/');	
    }


  }
});