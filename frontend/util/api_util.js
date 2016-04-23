var ServerActions = require('../actions/ServerActions');

var ApiUtil = {
  fetchBenches: function (){
    $.ajax({
      url: '/api/benches',
      success: function(benches) {
        ServerActions.receiveBenches(benches);
      }
    });
  }
};
window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
