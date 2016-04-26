import Ember from 'ember';

const CalnedarMonthRouter = Ember.Route.extend({
	beforeModel(data){
        console.log('month-model');
		let params = data.params['calendar.month'];
            if( ( typeof params.year !== 'undefined' && isNaN(parseInt(params.year)) ) ||  ( typeof params.month !== 'undefined' && isNaN(parseInt(params.month)) ) ){
                return Ember.RSVP.reject('bad date!');  
            }        
    }, 

    model(params){
    	return new Promise( (resolve) => {
            setTimeout(()=>{
                let answer = {
                	'year': (params.year ? parseInt(params.year) : new Date().getFullYear()), 
                	'month': (params.month ? parseInt(params.month) : new Date().getMonth())
                };
                resolve(answer);
            }, 500); 
        });      
    }
});

export default CalnedarMonthRouter;