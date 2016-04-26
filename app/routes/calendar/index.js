import Ember from 'ember';

const CalnedarRouter = Ember.Route.extend({
    beforeModel: function() {
      console.log('[CALENDAR-INDEX-ROUTER]');
      this.replaceWith('calendar.month', new Date().getFullYear(), new Date().getMonth()+1 );
   }
});

export default CalnedarRouter;