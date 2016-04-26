import Ember from 'ember';

const CalnedarRouter = Ember.Route.extend({
   beforeModel(){
      console.log('calendar-model');
      let month = new Date().getMonth() + 1;
      this.transitionTo('/calendar/' + new Date().getFullYear() + '/' + month + '/' );
    }  
});

export default CalnedarRouter;