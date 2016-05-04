import Ember from 'ember';

const CalendarPopupRoute = Ember.Route.extend({
  model(){
    console.log('[CALENDAR-POPUP-MODEL]');
  },

  actions: {
    close(){
      this.transitionTo('calendar.month.timestamp');
    }
  }
});

export default CalendarPopupRoute;