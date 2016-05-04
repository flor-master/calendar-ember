import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() { 
	this.route('calendar', function(){

        this.route('month', {path: '/month/'}, function() {
            this.route('timestamp', {path: '/:timestamp'}, function(){
                this.route('popup', {path: '/popup/'});
            });
        });

        this.route('week', {path: '/week/'}, function() {
            this.route('timestamp', {path: '/:timestamp'});
        });
  
	});  
  this.route('page_not_found', {path: '/*path'}); 
});

export default Router;
