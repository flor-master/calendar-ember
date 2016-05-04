import Ember from 'ember';

const CalnedarMonthRouter = Ember.Route.extend({
    beforeModel(params) {
      console.log('[MONTH-INDEX-ROUTER]');
      console.log(params);
      //this.replaceWith('calendar.month.timestamp', new Date().getTime() );
   },

   actions: {
        openPopupHandler(){
          console.log('openPopup ROUTER');
        }
    }


});

export default CalnedarMonthRouter;