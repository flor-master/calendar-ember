import Ember from 'ember';

export function monthFullName(params/*, hash*/) {
  let month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return month[params[0]-1];
}

export default Ember.Helper.helper(monthFullName);
