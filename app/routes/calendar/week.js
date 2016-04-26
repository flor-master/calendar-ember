import Ember from 'ember';

const CalnedarWeekRouter = Ember.Route.extend({
	model(){
		console.log('[WEEK-MODEL]');
	}
});

export default CalnedarWeekRouter;