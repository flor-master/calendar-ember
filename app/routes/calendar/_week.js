import Ember from 'ember';

const CalnedarWeekRouter = Ember.Route.extend({
    beforeModel: function() {
      console.log('[WEEK-INDEX-ROUTER]');
      this.replaceWith('calendar.week.timestamp', new Date().getTime() );
   }
});

export default CalnedarWeekRouter;