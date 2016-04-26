import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() { 
	this.route('calendar', function(){
    this.route('index', { path: '/' });
		this.route('month', {path: '/:year/:month'});
		this.route('week', {path: 'week'}); 
	}); 
  this.route('page_not_found', {path: '/*path'}); 
});

export default Router;
