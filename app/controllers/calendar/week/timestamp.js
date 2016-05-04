import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    
    nextMonth(timestamp) { 
      let date = new Date(parseInt(timestamp));
      let newTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7).getTime();
      this.transitionToRoute('calendar.week.timestamp', newTimestamp);
    },

    prevMonth(timestamp) { 
  		let date = new Date(parseInt(timestamp));
      let newTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7).getTime();
      this.transitionToRoute('calendar.week.timestamp', newTimestamp);
    },
    
    today() {
    	this.transitionToRoute('calendar.week.timestamp', new Date().getTime());	
    },

    month(timestamp) {
      this.transitionToRoute('calendar.month.timestamp', timestamp);
    }

  }
});