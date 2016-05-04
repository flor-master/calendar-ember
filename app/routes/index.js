import Ember from 'ember';

const IndexRouter = Ember.Route.extend({
    beforeModel(){
      console.log('[INDEX-MODEL]');
      this.transitionTo('calendar.month.timestamp', new Date().getTime() );
    }   
}); 

export default IndexRouter;