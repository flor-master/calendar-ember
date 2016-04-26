import Ember from 'ember';

const IndexRouter = Ember.Route.extend({
    beforeModel(){
      console.log('index- model');
    	let month = new Date().getMonth() + 1;
        this.transitionTo('/calendar/' + new Date().getFullYear() + '/' + month + '/' );
    }   
}); 

export default IndexRouter;