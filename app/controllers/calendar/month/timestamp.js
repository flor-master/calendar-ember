import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    
    nextMonth(timestamp) { 
      console.log(timestamp, 'next');
      let date = new Date(parseInt(timestamp));
      let newTimestamp = new Date(date.getFullYear(), date.getMonth()+1, 1).getTime();
      this.transitionToRoute('calendar.month.timestamp', newTimestamp);
    },

    prevMonth(timestamp) { 
      console.log(timestamp, 'prev');
      let date = new Date(parseInt(timestamp));
      let newTimestamp = new Date(date.getFullYear(), date.getMonth()-1, 1).getTime();
      this.transitionToRoute('calendar.month.timestamp', newTimestamp);
    },
    
    today() {
      this.transitionToRoute('calendar.month.timestamp', new Date().getTime() );  
    },

    week(timestamp) {
      let date = new Date(parseInt(timestamp));
      let firstDayOfMonthtimestamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
      this.transitionToRoute('calendar.week.timestamp', firstDayOfMonthtimestamp);  
    },

    openPopupHandler() {
      this.transitionToRoute('calendar.month.timestamp.popup');
    }
  }
});