import Ember from 'ember';

const IndexRouter = Ember.Route.extend({
    beforeModel(){
      console.log('[INDEX-MODEL]');
    	let month = new Date().getMonth() + 1;
      this.transitionTo('calendar.month', new Date().getFullYear(), month );
    }   
}); 

export default IndexRouter;