import Ember from 'ember';

const CalendarDays = Ember.Component.extend({

	totalDaysInMonth: null,
	firstDay: null,
	lastDay: null, 

	
	_getDaysList(startDate, totalDaysToShow) {
		let days = [];
		for (let i = 0; i < totalDaysToShow; i++) {
			let day = {
				date: new Date(startDate + i*24*60*60*1000).getDate(),
				dateTimestamp: new Date(startDate + i*24*60*60*1000).getTime()
			};
			days.push(day);
		}
		return days;
	},

	_setMonth(today){
		let firstDayOfMonth = new Date( today.getFullYear(), today.getMonth(), 1).getDay();
		firstDayOfMonth = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth-1);
		let startDate = new Date( today.getFullYear(), today.getMonth(), 1 - firstDayOfMonth).getTime();
		
		return this._getDaysList(startDate, 42);
	},

	_setWeek(today) {
		let firstDayOfWeek  = new Date( today.getFullYear(), today.getMonth(), today.getDate()).getDay();
		firstDayOfWeek = (firstDayOfWeek  === 0 ? 6 : firstDayOfWeek -1);
		let startDate = new Date( today.getFullYear(), today.getMonth(), today.getDate() - firstDayOfWeek ).getTime();
		
		return this._getDaysList(startDate, 7);
	},

	didReceiveAttrs(params) {	
		console.log(params);
		this.set('timestamp', params.newAttrs.timestamp.value); 
		if (params.newAttrs.totalDaysToShow === 7) {
			this.set('days', this._setWeek( new Date(parseInt(this.get('timestamp'))) ));
		} else {
			this.set('days', this._setMonth( new Date(parseInt(this.get('timestamp'))) ));
		}
	},


	actions: { 
		openPopup() {
			this.sendAction('openPopup');
		}
	},
	
});

export default CalendarDays;
