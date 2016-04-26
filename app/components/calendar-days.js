import Ember from 'ember';

const CalendarDays = Ember.Component.extend({

	totalDaysInMonth: null,
	firstDay: null,
	lastDay: null, 

	_setDays: function() {

		let _getDaysBefore = () => {
			let days = [],
				totalDaysInPrevMonth = new Date(this.get('year'), this.get('month'), 0).getDate(),
				firstDay = ( this.get('firstDay') === 0 ? 7 : this.get('firstDay') ),
				_day = {};
			
			for (let i = firstDay-2; i >= 0; i--) {
			 	_day = {date: totalDaysInPrevMonth - i};
				days.pushObject(_day);
			} 
			return days;
		};

		let _getDaysCurrent = () => {
			let days = [],
					_day = {};
			
			for ( let i = 1; i <= this.get('totalDaysInMonth'); i++){
				_day = {date: i};
				days.push(_day);
			} 
			
			return days;
		};

		let _getDaysAfter = (length) => {
			let days = [],
					dayCount = 1,
					_day = {};
			
			for (let i = length; i < this.get('totalDays'); i++){
				_day = {date: dayCount++};
				days.push(_day);
			}
			
			return days;
		};

		let days = _getDaysBefore();
		days = days.concat(_getDaysCurrent());
		days = days.concat(_getDaysAfter(days.length));
		return days;
	},

	didReceiveAttrs(params) {	
		this.set('totalDays', params.newAttrs.totalDays);
		this.set('year', params.newAttrs.year.value);
		this.set('month', params.newAttrs.month.value-1);
		this.set('totalDaysInMonth', new Date(params.newAttrs.year.value, params.newAttrs.month.value, 0).getDate() );
		this.set('firstDay', new Date(params.newAttrs.year.value, this.get('month'), 1).getDay());
		this.set('days', this._setDays());
	}
	
});

export default CalendarDays;
