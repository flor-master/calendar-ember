import Ember from 'ember';

const CalnedarWeekTimestampRouter = Ember.Route.extend({
  model(params){      
      console.log('[WEEK-TIMESTAMP-MODEL]', params);
      return new Ember.RSVP.Promise( (resolve) => {
            setTimeout(()=>{
                let timestamp = (params.timestamp ? params.timestamp : new Date().getTime() ),
                    date = new Date(parseInt(timestamp)),
                    answer = {
                        'timestamp': timestamp,
                        'year': date.getFullYear(), 
                        'month': date.getMonth()+1,
                        'date': date.getDate()
                    };
                resolve(answer); 
            }, 500); 
        });      

    }
});

export default CalnedarWeekTimestampRouter;