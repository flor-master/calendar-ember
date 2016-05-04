import Ember from 'ember';

const CalnedarRouter = Ember.Route.extend({
    beforeModel: function() {
      console.log('[CALENDAR-INDEX-ROUTER]');
      this.replaceWith('calendar.month.timestamp', new Date().getTime() );
   }
});

export default CalnedarRouter;