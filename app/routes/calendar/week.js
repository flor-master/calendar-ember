import Ember from 'ember';

const CalnedarWeekRouter = Ember.Route.extend({
	model(params){
		console.log(params, 'week-router');
	}
});

export default CalnedarWeekRouter;